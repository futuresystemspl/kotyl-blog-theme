<?php

use Timber\Timber;

$context = Timber::context();

$context['category'] = Timber::get_term();

Timber::render(
    array('pages/category.twig'),
    $context
);
