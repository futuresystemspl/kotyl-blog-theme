<?php

use Timber\Timber;
use Theme\Tag;
//use Theme\Prestashop;

$context = Timber::context();

$context['popular_tags'] = Tag::getPopularTags();
// $context['new_products'] = Prestashop::getCategory(12);

Timber::render('index.twig', $context);
