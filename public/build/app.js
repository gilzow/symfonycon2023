(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./login-controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_live_component_styles_live_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-live-component/styles/live.css */ "./node_modules/@symfony/ux-live-component/styles/live.css");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'live': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-live-component/dist/live_controller.js */ "./node_modules/@symfony/ux-live-component/dist/live_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/login-controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

const controller = (function() {
    return class LazyController extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
        constructor(context) {
            super(context);
            this.__stimulusLazyController = true;
        }
        initialize() {
            if (this.application.controllers.find((controller) => {
                return controller.identifier === this.identifier && controller.__stimulusLazyController;
            })) {
                return;
            }
            Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_core-js_modules_es_date_to-primitive_js-node_modules_core-js_modules_es_-383ea2"), __webpack_require__.e("assets_controllers_login-controller_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./assets/controllers/login-controller.js */ "./assets/controllers/login-controller.js")).then((controller) => {
                this.application.register(this.identifier, controller.default);
            });
        }
    }
})();


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/transition.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/alert.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/collapse.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_collapse_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/dropdown.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_dropdown_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/modal.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_highlight_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/highlight.js */ "./assets/js/highlight.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/doclinks.js */ "./assets/js/doclinks.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_doclinks_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");


// loads the Bootstrap jQuery plugins







// loads the code syntax highlighting library


// Creates links to the Symfony documentation


// start the Stimulus application


/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/doclinks.js":
/*!*******************************!*\
  !*** ./assets/js/doclinks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


// Wraps some elements in anchor tags referencing to the Symfony documentation
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
$(function () {
  var $modal = $('#sourceCodeModal');
  var $controllerCode = $modal.find('code.php');
  var $templateCode = $modal.find('code.twig');
  function anchor(url, content) {
    return '<a class="doclink" target="_blank" href="' + url + '">' + content + '</a>';
  }
  ;
  function wrap(content, links) {
    return content.replace(new RegExp(Object.keys(links).join('|'), 'g'), function (token) {
      return anchor(links[token], token);
    });
  }
  ;

  // Wraps links to the Symfony documentation
  $modal.find('.hljs-comment').each(function () {
    $(this).html($(this).html().replace(/https:\/\/symfony.com\/doc\/[\w/.#-]+/g, function (url) {
      return anchor(url, url);
    }));
  });

  // Wraps Symfony's attributes
  var attributes = {
    'Cache': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/cache.html',
    'IsGranted': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#isgranted',
    'ParamConverter': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html',
    'Route': 'https://symfony.com/doc/current/routing.html#creating-routes-as-attributes-or-annotations',
    'Security': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#security'
  };
  $controllerCode.find('.hljs-meta').each(function () {
    var src = $(this).text();
    $(this).html(wrap(src, attributes));
  });

  // Wraps Twig's tags
  $templateCode.find('.hljs-template-tag + .hljs-name').each(function () {
    var tag = $(this).text();
    if ('else' === tag || tag.match(/^end/)) {
      return;
    }
    var url = 'https://twig.symfony.com/doc/3.x/tags/' + tag + '.html#' + tag;
    $(this).html(anchor(url, tag));
  });

  // Wraps Twig's functions
  $templateCode.find('.hljs-template-variable > .hljs-name').each(function () {
    var func = $(this).text();
    var url = 'https://twig.symfony.com/doc/3.x/functions/' + func + '.html#' + func;
    $(this).html(anchor(url, func));
  });
});

/***/ }),

/***/ "./assets/js/highlight.js":
/*!********************************!*\
  !*** ./assets/js/highlight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/es/core.js");
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/es/languages/php.js");
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/twig */ "./node_modules/highlight.js/es/languages/twig.js");



highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('php', highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerLanguage('twig', highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__["default"]);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].highlightAll();

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_object_-eef3d1","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-live-compo-4edbe8"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qm9EO0FBQ3BELGlFQUFlO0FBQ2YsVUFBVSx5TkFBdUY7QUFDakcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0grQztBQUNoRDtBQUNBLHdDQUF3QywwREFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSw0V0FBNEY7QUFDeEc7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCMEI7O0FBRTNCO0FBQ21FO0FBQ0w7QUFDRztBQUNBO0FBQ0g7QUFDL0M7O0FBRWY7QUFDMkI7O0FBRTNCO0FBQzBCOztBQUUxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQjREOztBQUU1RDtBQUNPLElBQU1DLEdBQUcsR0FBR0QsMEVBQWdCLENBQUNFLHlJQUluQyxDQUFDOztBQUVGO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQ0FFLENBQUMsQ0FBQyxZQUFXO0VBQ1QsSUFBSUMsTUFBTSxHQUFHRCxDQUFDLENBQUMsa0JBQWtCLENBQUM7RUFDbEMsSUFBSUUsZUFBZSxHQUFHRCxNQUFNLENBQUNFLElBQUksQ0FBQyxVQUFVLENBQUM7RUFDN0MsSUFBSUMsYUFBYSxHQUFHSCxNQUFNLENBQUNFLElBQUksQ0FBQyxXQUFXLENBQUM7RUFFNUMsU0FBU0UsTUFBTUEsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUU7SUFDMUIsT0FBTywyQ0FBMkMsR0FBR0QsR0FBRyxHQUFHLElBQUksR0FBR0MsT0FBTyxHQUFHLE1BQU07RUFDdEY7RUFBQztFQUVELFNBQVNDLElBQUlBLENBQUNELE9BQU8sRUFBRUUsS0FBSyxFQUFFO0lBQzFCLE9BQU9GLE9BQU8sQ0FBQ0csT0FBTyxDQUNsQixJQUFJQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSixLQUFLLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUM3QyxVQUFBQyxLQUFLO01BQUEsT0FBSVYsTUFBTSxDQUFDSSxLQUFLLENBQUNNLEtBQUssQ0FBQyxFQUFFQSxLQUFLLENBQUM7SUFBQSxFQUN2QztFQUNMO0VBQUM7O0VBRUQ7RUFDQWQsTUFBTSxDQUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUNhLElBQUksQ0FBQyxZQUFXO0lBQ3pDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDaUIsSUFBSSxDQUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDaUIsSUFBSSxFQUFFLENBQUNQLE9BQU8sQ0FBQyx3Q0FBd0MsRUFBRSxVQUFTSixHQUFHLEVBQUU7TUFDeEYsT0FBT0QsTUFBTSxDQUFDQyxHQUFHLEVBQUVBLEdBQUcsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztFQUNQLENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQUlZLFVBQVUsR0FBRztJQUNiLE9BQU8sRUFBRSwyRkFBMkY7SUFDcEcsV0FBVyxFQUFFLHdHQUF3RztJQUNySCxnQkFBZ0IsRUFBRSxnR0FBZ0c7SUFDbEgsT0FBTyxFQUFFLDJGQUEyRjtJQUNwRyxVQUFVLEVBQUU7RUFDaEIsQ0FBQztFQUVEaEIsZUFBZSxDQUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUNhLElBQUksQ0FBQyxZQUFXO0lBQy9DLElBQUlHLEdBQUcsR0FBR25CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ29CLElBQUksRUFBRTtJQUV4QnBCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2lCLElBQUksQ0FBQ1QsSUFBSSxDQUFDVyxHQUFHLEVBQUVELFVBQVUsQ0FBQyxDQUFDO0VBQ3ZDLENBQUMsQ0FBQzs7RUFFRjtFQUNBZCxhQUFhLENBQUNELElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDYSxJQUFJLENBQUMsWUFBVztJQUNsRSxJQUFJSyxHQUFHLEdBQUdyQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNvQixJQUFJLEVBQUU7SUFFeEIsSUFBSSxNQUFNLEtBQUtDLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7TUFDckM7SUFDSjtJQUVBLElBQUloQixHQUFHLEdBQUcsd0NBQXdDLEdBQUdlLEdBQUcsR0FBRyxRQUFRLEdBQUdBLEdBQUc7SUFFekVyQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNpQixJQUFJLENBQUNaLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFZSxHQUFHLENBQUMsQ0FBQztFQUNsQyxDQUFDLENBQUM7O0VBRUY7RUFDQWpCLGFBQWEsQ0FBQ0QsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUNhLElBQUksQ0FBQyxZQUFXO0lBQ3ZFLElBQUlPLElBQUksR0FBR3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ29CLElBQUksRUFBRTtJQUV6QixJQUFJZCxHQUFHLEdBQUcsNkNBQTZDLEdBQUdpQixJQUFJLEdBQUcsUUFBUSxHQUFHQSxJQUFJO0lBRWhGdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDaUIsSUFBSSxDQUFDWixNQUFNLENBQUNDLEdBQUcsRUFBRWlCLElBQUksQ0FBQyxDQUFDO0VBQ25DLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUR1QztBQUNRO0FBQ0U7QUFFbkRDLDhFQUFxQixDQUFDLEtBQUssRUFBRUMsc0VBQUcsQ0FBQztBQUNqQ0QsOEVBQXFCLENBQUMsTUFBTSxFQUFFRSx1RUFBSSxDQUFDO0FBRW5DRiwwRUFBaUIsRUFBRTs7Ozs7Ozs7Ozs7O0FDUG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2xvZ2luLWNvbnRyb2xsZXIuanM/NmM5NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY2xpbmtzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9oaWdobGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9sb2dpbi1jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvbG9naW4tY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsImltcG9ydCAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvc3R5bGVzL2xpdmUuY3NzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ2xpdmUnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtbGl2ZS1jb21wb25lbnQvZGlzdC9saXZlX2NvbnRyb2xsZXIuanMnKSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5jb25zdCBjb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjbGFzcyBMYXp5Q29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgICAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX19zdGltdWx1c0xhenlDb250cm9sbGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbml0aWFsaXplKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24uY29udHJvbGxlcnMuZmluZCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyLmlkZW50aWZpZXIgPT09IHRoaXMuaWRlbnRpZmllciAmJiBjb250cm9sbGVyLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlcjtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1wb3J0KCcvVXNlcnMvZ2lsem93L3ByZXNlbnRhdGlvbnMvc3ltZm9ueWNvbi0yMDIzL2Fzc2V0cy9jb250cm9sbGVycy9sb2dpbi1jb250cm9sbGVyLmpzJykudGhlbigoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ucmVnaXN0ZXIodGhpcy5pZGVudGlmaWVyLCBjb250cm9sbGVyLmRlZmF1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuZXhwb3J0IHsgY29udHJvbGxlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cbi8vIGxvYWRzIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbnNcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC90cmFuc2l0aW9uLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9hbGVydC5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9qYXZhc2NyaXB0cy9ib290c3RyYXAvY29sbGFwc2UuanMnO1xuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL2Ryb3Bkb3duLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9tb2RhbC5qcyc7XG5pbXBvcnQgJ2pxdWVyeSdcblxuLy8gbG9hZHMgdGhlIGNvZGUgc3ludGF4IGhpZ2hsaWdodGluZyBsaWJyYXJ5XG5pbXBvcnQgJy4vanMvaGlnaGxpZ2h0LmpzJztcblxuLy8gQ3JlYXRlcyBsaW5rcyB0byB0aGUgU3ltZm9ueSBkb2N1bWVudGF0aW9uXG5pbXBvcnQgJy4vanMvZG9jbGlua3MuanMnO1xuXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cbmltcG9ydCAnLi9ib290c3RyYXAnO1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFdyYXBzIHNvbWUgZWxlbWVudHMgaW4gYW5jaG9yIHRhZ3MgcmVmZXJlbmNpbmcgdG8gdGhlIFN5bWZvbnkgZG9jdW1lbnRhdGlvblxuJChmdW5jdGlvbigpIHtcbiAgICB2YXIgJG1vZGFsID0gJCgnI3NvdXJjZUNvZGVNb2RhbCcpO1xuICAgIHZhciAkY29udHJvbGxlckNvZGUgPSAkbW9kYWwuZmluZCgnY29kZS5waHAnKTtcbiAgICB2YXIgJHRlbXBsYXRlQ29kZSA9ICRtb2RhbC5maW5kKCdjb2RlLnR3aWcnKTtcblxuICAgIGZ1bmN0aW9uIGFuY2hvcih1cmwsIGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuICc8YSBjbGFzcz1cImRvY2xpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIHVybCArICdcIj4nICsgY29udGVudCArICc8L2E+JztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gd3JhcChjb250ZW50LCBsaW5rcykge1xuICAgICAgICByZXR1cm4gY29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgbmV3IFJlZ0V4cChPYmplY3Qua2V5cyhsaW5rcykuam9pbignfCcpLCAnZycpLFxuICAgICAgICAgICAgdG9rZW4gPT4gYW5jaG9yKGxpbmtzW3Rva2VuXSwgdG9rZW4pXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIFdyYXBzIGxpbmtzIHRvIHRoZSBTeW1mb255IGRvY3VtZW50YXRpb25cbiAgICAkbW9kYWwuZmluZCgnLmhsanMtY29tbWVudCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuaHRtbCgkKHRoaXMpLmh0bWwoKS5yZXBsYWNlKC9odHRwczpcXC9cXC9zeW1mb255LmNvbVxcL2RvY1xcL1tcXHcvLiMtXSsvZywgZnVuY3Rpb24odXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gYW5jaG9yKHVybCwgdXJsKTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgLy8gV3JhcHMgU3ltZm9ueSdzIGF0dHJpYnV0ZXNcbiAgICB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICAgICAgJ0NhY2hlJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9jYWNoZS5odG1sJyxcbiAgICAgICAgJ0lzR3JhbnRlZCc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvc2VjdXJpdHkuaHRtbCNpc2dyYW50ZWQnLFxuICAgICAgICAnUGFyYW1Db252ZXJ0ZXInOiAnaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvY3VycmVudC9idW5kbGVzL1NlbnNpb0ZyYW1ld29ya0V4dHJhQnVuZGxlL2Fubm90YXRpb25zL2NvbnZlcnRlcnMuaHRtbCcsXG4gICAgICAgICdSb3V0ZSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L3JvdXRpbmcuaHRtbCNjcmVhdGluZy1yb3V0ZXMtYXMtYXR0cmlidXRlcy1vci1hbm5vdGF0aW9ucycsXG4gICAgICAgICdTZWN1cml0eSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvc2VjdXJpdHkuaHRtbCNzZWN1cml0eSdcbiAgICB9O1xuXG4gICAgJGNvbnRyb2xsZXJDb2RlLmZpbmQoJy5obGpzLW1ldGEnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3JjID0gJCh0aGlzKS50ZXh0KCk7XG5cbiAgICAgICAgJCh0aGlzKS5odG1sKHdyYXAoc3JjLCBhdHRyaWJ1dGVzKSk7XG4gICAgfSk7XG5cbiAgICAvLyBXcmFwcyBUd2lnJ3MgdGFnc1xuICAgICR0ZW1wbGF0ZUNvZGUuZmluZCgnLmhsanMtdGVtcGxhdGUtdGFnICsgLmhsanMtbmFtZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0YWcgPSAkKHRoaXMpLnRleHQoKTtcblxuICAgICAgICBpZiAoJ2Vsc2UnID09PSB0YWcgfHwgdGFnLm1hdGNoKC9eZW5kLykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly90d2lnLnN5bWZvbnkuY29tL2RvYy8zLngvdGFncy8nICsgdGFnICsgJy5odG1sIycgKyB0YWc7XG5cbiAgICAgICAgJCh0aGlzKS5odG1sKGFuY2hvcih1cmwsIHRhZykpO1xuICAgIH0pO1xuXG4gICAgLy8gV3JhcHMgVHdpZydzIGZ1bmN0aW9uc1xuICAgICR0ZW1wbGF0ZUNvZGUuZmluZCgnLmhsanMtdGVtcGxhdGUtdmFyaWFibGUgPiAuaGxqcy1uYW1lJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSAkKHRoaXMpLnRleHQoKTtcblxuICAgICAgICB2YXIgdXJsID0gJ2h0dHBzOi8vdHdpZy5zeW1mb255LmNvbS9kb2MvMy54L2Z1bmN0aW9ucy8nICsgZnVuYyArICcuaHRtbCMnICsgZnVuYztcblxuICAgICAgICAkKHRoaXMpLmh0bWwoYW5jaG9yKHVybCwgZnVuYykpO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2NvcmUnO1xuaW1wb3J0IHBocCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9waHAnO1xuaW1wb3J0IHR3aWcgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHdpZyc7XG5cbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgncGhwJywgcGhwKTtcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgndHdpZycsIHR3aWcpO1xuXG5obGpzLmhpZ2hsaWdodEFsbCgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIiQiLCIkbW9kYWwiLCIkY29udHJvbGxlckNvZGUiLCJmaW5kIiwiJHRlbXBsYXRlQ29kZSIsImFuY2hvciIsInVybCIsImNvbnRlbnQiLCJ3cmFwIiwibGlua3MiLCJyZXBsYWNlIiwiUmVnRXhwIiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJ0b2tlbiIsImVhY2giLCJodG1sIiwiYXR0cmlidXRlcyIsInNyYyIsInRleHQiLCJ0YWciLCJtYXRjaCIsImZ1bmMiLCJobGpzIiwicGhwIiwidHdpZyIsInJlZ2lzdGVyTGFuZ3VhZ2UiLCJoaWdobGlnaHRBbGwiXSwic291cmNlUm9vdCI6IiJ9