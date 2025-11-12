<?php

/**
 * WordPress Back Office Customizations
 * 
 * Extracted from theme-functions.php
 *
 */


/**
* Removes Posts and Comments section from admin Back office menu
*/
function theme_remove_admin_menus()
{
    global $submenu;

    //remove comments
    remove_menu_page('edit-comments.php');

    // remove customize link
    unset($submenu['themes.php'][6]);

}

/**
 * Remove native Meta Boxes
 */
function theme_remove_meta_boxes()
{
    // remove native Meta Boxes - we will re-add it later using ACF with better UI
    //remove_meta_box('postimagediv', 'post', 'side'); //Post Thumbnail
    //remove_meta_box('categorydiv', 'post', 'side'); //Categories
}

/** 
 * Use own external URL in admin login screen
 * http://wp.smashingmagazine.com/2012/05/17/customize-wordpress-admin-easily/
 */
function theme_login_url() {
    return home_url(); 
}

/**
 * Remove default WordPress favicon
 * https://stackoverflow.com/a/64164537
 */
function theme_remove_wordpress_favicon() {
    exit;
}