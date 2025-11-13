<?php

namespace Theme;

use Timber\Timber;

class Tag
{

    public static function getPopularTags(int $limit = 8): array
    {

        $query = array(
            'taxonomy' => 'post_tag',
            'orderby' => 'count',
            'order'   => 'DESC',
            'number' => $limit,
        );

        $terms = get_terms($query);

        foreach ($terms as &$term) {

            /** 
             *  Timber takes care of children, link, meta fields etc 
             *  see: https://timber.github.io/docs/reference/timber-term/
             */
            $term = Timber::get_term($term->term_id);
        }

        return $terms;
    }

    public static function getTags(int $limit = 20): array
    {

        $query = array(
            'taxonomy' => 'post_tag',
            'orderby' => 'name',
            'order'   => 'ASC',
            'number' => $limit,
        );

        $terms = get_terms($query);

        foreach ($terms as &$term) {

            /** 
             *  Timber takes care of children, link, meta fields etc 
             *  see: https://timber.github.io/docs/reference/timber-term/
             */
            $term = Timber::get_term($term->term_id);
        }

        return $terms;
    }
}
