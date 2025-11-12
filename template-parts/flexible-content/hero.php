<?php



/**
 * 
 * ACF Extended with Dynamic Preview - additional variables.
 *
 * @array   $layout      Layout settings (without values)
 * @array   $field       Flexible content field settings
 * @bool    $is_preview  True in Administration
 * 
 * Documentation:
 * 
 * https://www.acf-extended.com/features/fields/flexible-content/dynamic-render

 */
 

$context = Timber\Timber::get_context();

$context['layout'] = $layout;
$context['field'] = $field;
$context['is_preview'] = $is_preview;

/**
 * When using ACF Extended with Dynamic Preview, to render content on Front Side use the_flexible function (introduced via ACFE) to glue ACF Extended with Timber. Should you don't need Dynamic Preview, use standard loop for repeaters as in Timber ACF Cookbook to render template directly. To use PHP controller without ACF Extended, check see theme_render_flexible_content() (custom function added to theme)
 * 
 * Further read:
 * 
 * Timber ACF Cookbook: https://timber.github.io/docs/guides/acf-cookbook/#flexible-content-field
 * Dynamic Preview via ACF Extended: https://www.acf-extended.com/features/fields/flexible-content/dynamic-render#front-end-render
 * Using ACF Extended with Timber: https://github.com/acf-extended/ACF-Extended/issues/26
 * 
 * 
 **/
$context['section'] = get_row(true); //it is also possible to directly get single field via the_sub_field();

Timber\Timber::render('views/partials/flexible-content/banner-hero.twig', $context);

