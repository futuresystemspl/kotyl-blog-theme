<?php

use Timber\Timber;

$context = Timber::context();

$context['tag'] =  Timber::get_term();

Timber::render('pages/tag.twig', $context);
