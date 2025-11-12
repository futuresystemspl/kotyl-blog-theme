<?php

/**
 * Optional file for adding extra logic to specific Flexible Field. 
 * If deleted, template will be rendered via custom function theme_render_flexible_content()
 */

Timber::render('views/partials/flexible-content/section-media-text.twig', $context);