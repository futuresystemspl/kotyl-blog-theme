<?php

use Timber\Timber;
use Theme\Post;

$context = Timber::context();



$context['related_posts'] = Post::getNewestPosts($post->ID);

Timber::render(
    array(
        'single-' . $post->ID . '.twig',
        'single-' . $post->post_type . '.twig',
        'single.twig'
    ),
    $context
);
