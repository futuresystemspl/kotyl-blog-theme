<?php

$postType = get_query_var('post_type');
$term = get_queried_object();

$context = Timber::get_context();

$context['post_type'] = get_query_var('post_type');
$context['term'] = $term;
$context['title'] = $term->name . ' - ' . __('archiwum', 'theme');

/**
 * 
 * On archive pages, we can filter posts by quering taxonomies directly via URL (both approaches work):
 * 
 * domain/custom-post-type-slug/?custom-taxonomy=term
 * domain/custom-post-type-slug/?custom-taxonomy=term1,term2
 * 
 * domain/custom-taxonomy-slug/term/
 * domain/custom-taxonomy-slug/term,term2/
 * 
 */

echo '<pre>';
print_r($wp_query); 
echo '</pre>';

Timber::render( 
	array(
		'archive-' . $postType . '.twig', 
		'archive.twig' ), 
	$context 
);