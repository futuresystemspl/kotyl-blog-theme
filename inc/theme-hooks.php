<?php

/**
 * Theme hooks
 * author: futuresystems.pl
 *
 */

/**
 * Init
 * @see theme_disable_emojis()
 */
if( !is_admin() ) add_action( 'init', 'theme_disable_emojis' );	


/**
 * Header front-end markup cleanup
 */
remove_action( 'wp_head', 'rel_canonical');
remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0 );
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
remove_action( 'wp_head', 'feed_links_extra', 3 );
remove_action( 'wp_head', 'feed_links', 2 );
remove_action( 'wp_head', 'rsd_link');
remove_action( 'wp_head', 'wlwmanifest_link');
remove_action( 'wp_head', 'index_rel_link');
remove_action( 'wp_head', 'parent_post_rel_link');
remove_action( 'wp_head', 'start_post_rel_link');
remove_action( 'wp_head', 'wp_generator');
remove_action( 'wp_head', 'rest_output_link_wp_head');
remove_action( 'wp_head', 'wp_resource_hints', 2 );

// Turn off oEmbed auto discovery and Remove oEmbed discovery links.
remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);
remove_action('wp_head', 'wp_oembed_add_discovery_links');

// Remove oEmbed-specific JavaScript from the front-end and back-end.
remove_action('wp_head', 'wp_oembed_add_host_js');

//remove_action( 'template_redirect', 'rest_output_link_header', 11, 0 );

//disable XML RPC
add_filter('xmlrpc_enabled', '__return_false');

//remove favicon
add_action( 'do_faviconico', 'theme_remove_wordpress_favicon');

//remove CSS related to Gutenberg introduced in 5.0
add_action( 'wp_print_styles', 'theme_remove_gutenberg_css', 100 );

/**
 * Footer
 *
 * @see theme_deregister_scripts()
 * @see theme_enqueue_frontend_scripts()
 * @see theme_deregister_jquery()
 */
add_action( 'wp_footer', 'theme_deregister_scripts' );

if (!is_admin()) {
    add_action( 'wp_enqueue_scripts', 'theme_enqueue_frontend_scripts', 5 );
    add_action( 'wp_enqueue_scripts', 'theme_deregister_jquery', 10 );

}

/**
 * Back office admin area
 * @see theme_remove_editor()
 * @see theme_remove_admin_menus()
 * @see theme_login_url()
 * @see theme_remove_meta_boxes()
 */
add_action( 'init', 'theme_remove_editor' );
add_action( 'admin_menu', 'theme_remove_admin_menus' );
add_action( 'login_head', 'theme_enqueue_backend_scripts' );
add_action( 'admin_head', 'theme_enqueue_backend_scripts' );
add_filter( 'login_headerurl', 'theme_login_url' );
add_action( 'do_meta_boxes', 'theme_remove_meta_boxes' );

/**
 * shortcodes
 * see inc/theme-shortcodes.php
 */
add_shortcode('link', 'theme_shortcode_permalinks');
