<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action( 'wp_enqueue_scripts', 'drastha_child_enqueue_styles', 999 );
function drastha_child_enqueue_styles() {
    
    wp_enqueue_style( 'hello-elementor-parent', get_template_directory_uri() . '/style.css' );

    wp_enqueue_style( 'hello-elementor-child', get_stylesheet_directory_uri() . '/style.css', array( 'hello-elementor-parent' ), time() );

    if ( is_singular( 'courses' ) || is_singular( 'lesson' ) ) {
        wp_enqueue_style( 'drastha-course-css', get_stylesheet_directory_uri() . '/course-style.css', array(), time() );
    }
    
    if ( is_page( 'dashboard' ) ) {
        wp_enqueue_style( 'drastha-dashboard-css', get_stylesheet_directory_uri() . '/dashboard-style.css', array(), time() );
    }
}

add_shortcode( 'drastha_course_price', 'drastha_render_course_price' );
function drastha_render_course_price() {
    global $post;
    
    if ( ! $post ) return '';

    $product_id = get_post_meta( $post->ID, '_tutor_course_product_id', true );
    
    if ( empty( $product_id ) ) {
        return '<span class="tutor-course-price" style="font-weight: bold; color: #2b478b;">Gratis</span>';
    }

    $product = wc_get_product( $product_id );
    if ( $product ) {
        return '<span class="tutor-course-price" style="font-weight: bold; color: #2b478b;">' . $product->get_price_html() . '</span>';
    }

    return '';
}