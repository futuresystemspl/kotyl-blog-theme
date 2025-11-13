<?php

/**
 * Theme global variables for template files
 * Some global variables later enqueued in JS via wp_localize_script (@see theme_enqueue_scripts() ), so don't put any fragile data here
 * TO DO: refactor as object
 * author: futuresystems.pl
 *
 */



$lang = defined('ICL_LANGUAGE_CODE') ? ICL_LANGUAGE_CODE : 'pl';
$rest_url = get_rest_url(null, 'wp/v2/');
$theme_rest_url = get_rest_url(null, 'theme/v1/');

define('THEME_ARCHIVE_PAGE_ID', 0);
define('THEME_CONTACT_PAGE_ID', 0);
define('THEME_TERMS_PAGE_ID', 0);
define('THEME_PRIVACY_PAGE_ID', 0);

// variables for js

//some default endpoints for React Components defined here to easily 
//override via template files regarding to current contex or filters (i.e. is_home or wpml_object_id, see theme_enqueue_frontend_scripts() at theme-functions.php)
//lang param is required when using WPML
$theme_endpoints = array(
    'base' => $rest_url,
    'theme' => $theme_rest_url,
    'posts' => $rest_url . 'posts?per_page=4',
    'shop_api' => 'https://bravomoda.eu/module/fs_rest/',
);

$i18n = array(
    'offer' => __('Okazja', 'theme'),
    'no_data' => __('Brak danych.', 'theme'),
    'no_posts' => __('Brak postów do wyświetlenia.', 'theme'),
    'read_more' => __('Czytaj dalej', 'theme'),
    'read_full' => __('Przeczytaj całość', 'theme'),
    'nav_show_all' => __('Pokaż wszystko', 'theme'),
    'title_products' => __('Polecane produkty', 'theme'),
    'cta_store' => __('Przejdź do sklepu', 'theme'),
);

// Global variables for template files and JS (all will be public in JS due to enqueue_scripts)
$theme_vars = array(
    'base_url' => home_url(),
    'theme_url' => get_template_directory_uri(),
    'shop_url' => '//kotyl.eu',
    'lang' => $lang,
    'rest' => $theme_endpoints,
    'i18n' => $i18n,
    'currency' => 'zł',
);
