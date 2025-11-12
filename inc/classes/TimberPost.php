<?php

namespace Theme;

/**
 * Extend Timber Post
 * 
 * https://timber.github.io/docs/guides/extending-timber/#an-example-that-extends-timberpost
 * https://stackoverflow.com/a/54910445
 * 
 **/


class TimberPost extends \Timber\Post {

    public function customFunction() {

        // Get custom data
        return "Custom data";

	}

    /**
     * Deprecated: use custom function theme_render_flexible_content instead, which allows for cleaner structure.
     * 
     * Handle additional context for Flexible Content Fields
     * 
     * Example inspired by:
     * 
     * https://stackoverflow.com/a/54028126
     * 
     * TO DO: ideally, PHP logic for each field would be extracted to separate file
     * 
     */
    public function flexible_content() {

        $fields = array();

        $flexible_content = $this->meta('content');

        foreach ($flexible_content as $flexible_content_field) {

            $layout = $flexible_content_field['acf_fc_layout'];

            // check for specific layout
            //if($layout == "section_media-text")

            //Access fields properties i.e. $flexible_content_field['text']

            $flexible_content_field['custom_context'] = 'custom context';

            $fields[] = $flexible_content_field;

        }

        return $fields;

    }    

}