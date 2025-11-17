<?php

/**
 * Template Name: Tematy
 * Description: A custom template for Topics (list default taxonomy post_tags terms) subpage
 */
use Timber\Timber;
use Theme\Tag;

$context = Timber::context();

$context['tags'] = Tag::getTags(25);

Timber::render( 
    array( 'pages/topics.twig' ), 
    $context 
);
