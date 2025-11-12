<?php

/**
 * Functions related to editing default WordPress Editor
 *
 * Extracted from theme-functions.php
 *
 */


/**
 * Removes editor from Posts and Pages (we are using flexible content via ACF Plugin)
 * https://codex.wordpress.org/Function_Reference/remove_post_type_support
 */
function theme_remove_editor()
{
    remove_post_type_support('post', 'editor');
    remove_post_type_support('page', 'editor');
}

