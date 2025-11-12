<?php

use Timber\Timber;
//use Theme\Prestashop;

$context = Timber::context();


// $context['new_products'] = Prestashop::getCategory(12);

Timber::render('index.twig', $context);
