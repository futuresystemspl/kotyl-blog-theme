<?php

namespace Theme;

use Timber\ImageHelper;

class Post {

    /**
     * Default Posts WP REST endpoint is missing post meta data
     */
    public static function getMetaForRestApi($id_post) {
        
        $meta_fields = array();

        //ACF Image field
        //https://www.advancedcustomfields.com/resources/image/    
        $cover = get_field('cover_image', $id_post);
        $cover_image = $cover ? $cover['sizes']['cover'] : false;
    
        if($cover) {
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

}