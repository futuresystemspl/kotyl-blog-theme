<?php

use Timber\Timber;

$context = Timber::context();
//$context['post'] =  Timber::get_post();

Timber::render(
    array(
        'single-' . $post->ID . '.twig',
        'single-' . $post->post_type . '.twig',
        'single.twig'
    ),
    $context
);
