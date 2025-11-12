<?php

/**
 * Custom Post Types setup
 */

function theme_custom_post_types()
{
    //require_once( get_template_directory() . '/inc/post-types/product.php' );
}

add_action('init', 'theme_custom_post_types');
