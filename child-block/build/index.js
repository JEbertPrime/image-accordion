/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);






var ALLOWED_MEDIA_TYPES = ['image'];

function formatStringToCamelCase(str) {
  var splitted = str.split("-");
  if (splitted.length === 1) return splitted[0];
  return splitted[0] + splitted.slice(1).map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join("");
}

;

function parseStyles(styles) {
  var array = styles.split(';');
  var objArray = array.map(function (style) {
    return style.split(/:(.+)/);
  }).map(function (arr) {
    var tempObj = {};
    tempObj[formatStringToCamelCase(arr[0])] = arr[1];
    return tempObj;
  });
  return objArray;
}

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])('justin-wp-plugins/hero-child', {
  title: 'Hero Child Element',
  icon: 'universal-access-alt',
  category: 'layout',
  attributes: {
    styles: {
      type: 'string',
      source: 'attribute',
      selector: 'div',
      attribute: 'style'
    }
  },
  example: {
    attributes: {
      background: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])({
        background: 'blue'
      })
    }
  },
  edit: function edit(_ref) {
    var _loadStyles$, _loadStyles$2;

    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        className = _ref.className;
    var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["useBlockProps"])();
    var loadStyles = attributes.styles ? parseStyles(attributes.styles) : [];

    var onChangeBackground = function onChangeBackground(newBackground) {
      setAttributes({
        background: 'url(' + newBackground.url + ')'
      });
    };

    var onChangeBackgroundPosition = function onChangeBackgroundPosition(_ref2) {
      var value = _ref2.target.value;
      setAttributes({
        backgroundPositionX: value + '%'
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], {
      key: "setting"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      id: "image-controls"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("fieldset", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background image', 'image-selector-example'),
      onSelect: onChangeBackground,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: 'editor-post-featured-image__toggle',
          onClick: open
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Set background image', 'image-selector-example'));
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      id: "position-controls"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("fieldset", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("legend", {
      className: "blocks-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background position', 'hero-child')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
      type: "range" // Element Tag for Gutenberg standard colour selector
      ,
      onChange: onChangeBackgroundPosition // onChange event callback
      ,
      min: "0",
      max: "100"
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      id: "inner",
      className: 'col ' + ' edit',
      style: {
        height: 'calc(99vh - 100px)',
        backgroundImage: attributes.background ? attributes.background : (_loadStyles$ = loadStyles[1]) === null || _loadStyles$ === void 0 ? void 0 : _loadStyles$.backgroundImage,
        backgroundPositionX: attributes.backgroundPositionX ? attributes.backgroundPositionX : (_loadStyles$2 = loadStyles[2]) === null || _loadStyles$2 === void 0 ? void 0 : _loadStyles$2.backgroundPositionX
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"], {
      orientation: "horizontal"
    })));
  },
  save: function save(_ref4) {
    var _loadStyles$3, _loadStyles$4;

    var attributes = _ref4.attributes,
        className = _ref4.className;
    var loadStyles = attributes.styles ? parseStyles(attributes.styles) : {};
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      tabIndex: "0",
      className: 'col ' + className,
      id: "#inner",
      style: {
        height: 'calc(99vh - 100px)',
        backgroundImage: attributes.background ? attributes.background : (_loadStyles$3 = loadStyles[1]) === null || _loadStyles$3 === void 0 ? void 0 : _loadStyles$3.backgroundImage,
        backgroundPositionX: attributes.backgroundPositionX ? attributes.backgroundPositionX : (_loadStyles$4 = loadStyles[2]) === null || _loadStyles$4 === void 0 ? void 0 : _loadStyles$4.backgroundPositionX
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null));
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map