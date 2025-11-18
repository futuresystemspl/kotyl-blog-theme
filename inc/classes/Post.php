<?php

namespace Theme;

use Timber\Timber;
use Timber\ImageHelper;

class Post
{

    /**
     * Default Posts WP REST endpoint is missing post meta data
     */
    public static function getMetaForRestApi($id_post)
    {

        $meta_fields = array();

        //ACF Image field
        //https://www.advancedcustomfields.com/resources/image/    
        $cover = get_field('cover_image', $id_post);
        $cover_image = $cover ? $cover['sizes']['cover'] : false;

        if ($cover) {
            $meta_fields['cover'] = array(
                'alt' => $cover['alt'],
                'caption' => $cover['caption'],
                'jpeg' => $cover_image,
                'webp' => ImageHelper::img_to_webp($cover_image), //see timber/lib/ImageHelper.php
            );
        } else {
            $meta_fields['cover'] = false;
        }

        return $meta_fields;
    }


    public static function getNewestPosts($id_post = 0, $limit = 3)
    {

        $query = array(
            'post__not_in' => array($id_post),
            'posts_per_page' => $limit,
        );

        $posts = Timber::get_posts($query);

        return $posts;
    }
}
