<?php

/**
 * Theme related functions
 *
 * To avoid spaghetti code some functions were extracted by logic to additional files:
 *
 * theme-assets.php - functions related to JS and CSS assets management
 * theme-admin.php - functions related to Back Office Customizations
 * theme-editor.php - functions related to WordPress default Editor
 *
 *
 * author: futuresystems.pl
 *
 */

/**
 * Disable emojis
 * https://wordpress.stackexchange.com/a/185578
 */
function theme_disable_emojis() {
    // all actions related to emojis
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
}
