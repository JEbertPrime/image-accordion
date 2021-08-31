<?php

/**
 * Plugin Name: Image Accordion Parent Block
 * Version: 1.1.0
 * Author: Justin Ebert
 *
 * @package justin-wp-plugins
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function hero_parent_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	// automatically load dependencies and version
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

	wp_register_script(
		'hero-parent',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
	wp_register_style(
		'hero-parent-editor',
		plugins_url('editor.css', __FILE__),
		array('wp-edit-blocks'),
		filemtime(plugin_dir_path( __FILE__ ) . 'editor.css')
	);
	wp_register_style(
		'hero-parent',
		plugins_url('style.css', __FILE__),
		array(),
		filemtime( plugin_dir_path(__FILE__) . 'style.css')
	);
	register_block_type(
		'justin-wp-plugins/hero-parent',
		[
			'editor_script' => 'hero-parent',
			'style' => 'hero-parent',
			'editor_style'=> 'hero-parent-editor',
		]
	);

}
add_action( 'init', 'hero_parent_register_block' );
