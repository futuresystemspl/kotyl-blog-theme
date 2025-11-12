<?php

/*
 * ACF Flexible Content Layout custom "controller"
 *
 * @array   $loop   Twig loop context
 * @array   $field  Flexible content field values
 *
 * @see theme_render_flexible_content() @ inc/setup/timber-setup.php
 */

use Theme\Prestashop;

$id_category = $field['id_category'];

$context['products'] = Prestashop::getCategory($id_category);

Timber::render('views/partials/flexible-content/section-products.twig', $context);
