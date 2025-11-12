<?php

/* 
 *  Custom Post Type via register_post_type
 *  https://developer.wordpress.org/reference/functions/register_post_type/
 * 
 */

register_post_type( 'product',
    array(
        'labels' => array(
            'name'          => __("Oferta", 'theme_bo'),
            'all_items'     => __("Lista produktów i usług", 'theme_bo'),
            'singular_name' => __("Produkt", 'theme_bo'),
            'add_new'       => _x('Dodaj produkt', 'product', 'theme_bo'),
            'add_new_item'  => __('Dodaj nowy produkt', 'theme_bo'),
            'edit_item'     => __('Edytuj produkt', 'theme_bo'),
            'view_item'     => __('Zobacz', 'theme_bo'),                
        ),
        'description'   => __("Lista produktów i usług", 'theme_bo'),
        'public'        => true,
        'menu_position' => 4,
        'menu_icon'     => 'dashicons-tag',
        'supports'      => array( 'title', 'page-attributes' ), //no editor due to flexible content via ACF
        'show_in_rest'  => true,
        'has_archive'   => true,
        'rewrite'       => array( 'slug' => 'oferta' ),
        'hierarchical'  => true,
    )
);
