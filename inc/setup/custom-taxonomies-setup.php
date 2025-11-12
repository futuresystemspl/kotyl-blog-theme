<?php

/**
 * Custom Taxonomies setup
 */

function theme_custom_taxonomies()
{

    //require_once( get_template_directory() . '/inc/taxonomies/product_category.php' );    

}

add_action('init', 'theme_custom_taxonomies');
