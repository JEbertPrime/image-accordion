import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { Button } from "@wordpress/components";
const {useSelect, dispatch, select} = wp.data;

import {
  RichText,
  useBlockProps,
  BlockControls,
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
const ALLOWED_MEDIA_TYPES = ["image"];
function formatStringToCamelCase(str) {
  const splitted = str.split("-");
  if (splitted.length === 1) return splitted[0];
  return (
    splitted[0] +
    splitted
      .slice(1)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")
  );
}
function parseStyles(styles) {
  var array = styles.split(";");
  var objArray = array
    .map((style) => {
      return style.split(/:(.+)/);
    })
    .map((arr) => {
      var tempObj = {};
      tempObj[formatStringToCamelCase(arr[0])] = arr[1];
      return tempObj;
    });
  return objArray;
}
registerBlockType("justin-wp-plugins/accordion-child", {
  title: "image-accordion Child",
  icon: "universal-access-alt",
  category: "layout",
  attributes: {
    styles: {
      type: "string",
      source: "attribute",
      selector: "div",
      attribute: "style",
    },
	index:{
		type: "string",
		source:"attribute",
		selector: "div",
		attribute:'index'
	},
	last:{
		type: "string",
		source: "attribute",
		selector: "div",
		attribute:"last"
	}
  },
  example: {
    attributes: {
      background: __({ background: "blue" }),
    },
  },
  edit: ({ attributes, setAttributes, className }) => {
    const blockProps = useBlockProps();

    var loadStyles = attributes.styles ? parseStyles(attributes.styles) : [];
    const onChangeBackground = (newBackground) => {
      setAttributes({ background: "url(" + newBackground.url + ")" });
    };
    const onChangeBackgroundPosition = ({ target: { value } }) => {
      setAttributes({ backgroundPositionX: value + "%" });
    };

    return (
      <div>
        <InspectorControls key="setting">
          <div id="image-controls">
            <fieldset>
              <MediaUploadCheck>
                <MediaUpload
                  title={__("Background image", "image-selector-example")}
                  onSelect={onChangeBackground}
                  allowedTypes={ALLOWED_MEDIA_TYPES}
                  render={({ open }) => (
                    <Button
                      className={"editor-post-featured-image__toggle"}
                      onClick={open}
                    >
                      {__("Set background image", "image-selector-example")}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </fieldset>
          </div>
          <div id="position-controls">
            <fieldset>
              <legend className="blocks-base-control__label">
                {__("Background position", "accordion-child")}
              </legend>
              <input
                type="range" // Element Tag for Gutenberg standard colour selector
                onChange={onChangeBackgroundPosition} // onChange event callback
                min="0"
                max="100"
              />
            </fieldset>
          </div>
        </InspectorControls>
        <div
          {...blockProps}
          id="inner"
          className={"col " + " edit"}
          style={{
            height: "calc(99vh - 100px)",
            backgroundImage: attributes.background
              ? attributes.background
              : loadStyles[1]?.backgroundImage,
            backgroundPositionX: attributes.backgroundPositionX
              ? attributes.backgroundPositionX
              : loadStyles[2]?.backgroundPositionX,
          }}
        >
          <InnerBlocks orientation="horizontal" />
        </div>
      </div>
    );
  },
  save: ({ attributes, className, clientId }) => {
	var parents = select( 'core/block-editor' ).getBlockParents(clientId); 
	dispatch('core/block-editor').updateBlockAttributes(parents[parents.length-1], {children: true})

    const loadStyles = attributes.styles ? parseStyles(attributes.styles) : {};
	var last = {last: attributes.last}
    return (
      <div
        className={"col-md inner-accordion " + (attributes.index == 0 ? 'active':'')}
        id={"inner-accordion-" + attributes.index}
        index={attributes.index}
		last={attributes.last}
        style={{
          backgroundImage: attributes.background
            ? attributes.background
            : loadStyles[1]?.backgroundImage,
          backgroundPositionX: attributes.backgroundPositionX
            ? attributes.backgroundPositionX
            : loadStyles[2]?.backgroundPositionX,
        }}
      >
        {attributes.index == 0 ? null : <button class="arrow left">{"<"}</button>}
        <InnerBlocks.Content />
       {attributes.last == 'true' ? null : <button class="arrow right">{">"}</button>}
      </div>
    );
  },
});
