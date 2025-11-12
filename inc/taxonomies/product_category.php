<?php

/* 
 *  Custom Post Type via register_taxonomy
 *  https://developer.wordpress.org/reference/functions/register_taxonomy/
 * 
 */

register_taxonomy('product_category', array('product'),
    array(
        'labels' => array(
            'name'          => __('Kategorie', 'theme_bo'),
            'add_new_item'  => __('Dodaj nową kategorię', 'theme_bo'),
            'new_item_name' => __('Dodaj nową kategorię', 'theme_bo'),
            'edit_item'     => __('Edytuj kategorię', 'theme_bo'),
        ),
        'show_ui'           => true,
        'show_tagcloud'     => false,
        'show_admin_column' => true,
        'hierarchical'      => true,
        //'meta_box_cb'       => false,
        'rewrite'           => array( 'slug' => 'kategoria_produktu' ),
        'query_var'         => true,
        'show_in_rest'      => true,
    )
);