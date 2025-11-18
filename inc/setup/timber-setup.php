<?php

use Timber\Timber;
use Theme\Breadcrumbs;
use Theme\Prestashop;
use Theme\Seo;



// Initialize Timber.
Timber::init();

/**
 * Customize Timber with custom context, functions and filters
 * 
 * Docs:
 * 
 * https://timber.github.io/docs/v2/guides/extending-twig/
 * 
 **/
add_filter('timber/context', 'theme_global_context');
add_filter('timber/twig', 'add_to_twig');

function add_to_twig(\Twig\Environment $twig)
{
    $twig->addFunction(new \Twig\TwigFunction('theme_render_flexible_content', 'theme_render_flexible_content'));

    return $twig;
}

/**
 * Timber global context
 */
function theme_global_context($context)
{

    global $theme_vars;

    $context['is_home'] = is_home();
    $context['is_single'] = is_single();

    //https://timber.github.io/docs/v2/guides/menus/
    $context['nav'] = Timber::get_menu('nav-top', ['depth' => 1]);

    //global links
    $context['links'] = array(
        'archive' => get_permalink(THEME_ARCHIVE_PAGE_ID),
        'tags' => get_permalink(THEME_TERMS_PAGE_ID),
        'store' => $theme_vars['shop_url'],
    );

    //https://timber.github.io/docs/guides/acf-cookbook/#options-page
    $context['options'] = get_fields('options');

    /**
     * @see inc/classes/Breadcrumbs.php
     */
    $context['breadcrumbs'] = Breadcrumbs::getBreadcrumbs();

    /**
     * @see inc/classes/Seo.php
     */
    $context['seo'] = Seo::getMetaTags();


    /**
     * @see inc/classes/Prestashop.php
     */
    $context['store_categories'] = Prestashop::getCategories(3);

    return $context;
}

/**
 * 
 * Custom Twig function to introduce template hierarchy for ACF Flexible Content: 
 * use PHP file if it exists (i.e. to provide some additional logic, queries etc), 
 * otherwise render Twig template file
 * 
 * TO DO: check for ACF Plugin first?
 * 
 */
function theme_render_flexible_content($field)
{

    $context['section'] = $field;
    $layout = str_replace('_', '-', $field['acf_fc_layout']);

    $layout_file_path = get_theme_file_path('/template-parts/flexible-content/' . $layout . '.php');
    $layout_file_template_path = get_theme_file_path('/views/partials/flexible-content/' . $layout . '.twig');

    if (file_exists($layout_file_path)) {

        include $layout_file_path;
    } elseif (file_exists($layout_file_template_path)) {
        return Timber::compile('views/partials/flexible-content/' . $layout . '.twig', $context);
    }
}
