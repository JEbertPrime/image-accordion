import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
const {useSelect, dispatch, select} = wp.data;

registerBlockType( 'justin-wp-plugins/accordion-parent', {
	title: 'image-accordion Parent',
	category: 'layout',
	edit: ( { className, clientId } ) => {
		var children = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
		children.forEach(function(child, i, arr){
			dispatch('core/block-editor').updateBlockAttributes(child.clientId, {index: i, last: Object.is(arr.length - 1, i)?  'true':'false'})
		});
		return (
			<div className={ className }>
				<div className='row'>
				<InnerBlocks orientation="horizontal" />

				</div>
			</div>
		);
	},
	save: ( { className, attributes } ) => {
		return (
			<div className={ className }>
				<div className='row'>
				<InnerBlocks.Content />

				</div>
			</div>
		);
	},
} );
