import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

registerBlockType( 'justin-wp-plugins/accordion-parent', {
	title: 'image-accordion Parent',
	category: 'layout',
	edit: ( { className } ) => {
		return (
			<div className={ className }>
				<div className='row'>
				<InnerBlocks orientation="horizontal" />

				</div>
			</div>
		);
	},
	save: ( { className } ) => {
		return (
			<div className={ className }>
				<div className='row'>
				<InnerBlocks.Content />

				</div>
			</div>
		);
	},
} );
