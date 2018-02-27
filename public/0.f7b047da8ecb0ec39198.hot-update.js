webpackHotUpdate(0,{

/***/ 589:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./frontend/components/Carousel.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _pureReactCarousel = __webpack_require__(/*! pure-react-carousel */ 824);\n\n__webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ 1050);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Carousel = function (_React$Component) {\n  _inherits(Carousel, _React$Component);\n\n  function Carousel() {\n    _classCallCheck(this, Carousel);\n\n    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));\n  }\n\n  _createClass(Carousel, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _pureReactCarousel.CarouselProvider,\n        {\n          naturalSlideWidth: 100,\n          naturalSlideHeight: 125,\n          totalSlides: 3\n        },\n        _react2.default.createElement(\n          _pureReactCarousel.Slider,\n          null,\n          _react2.default.createElement(\n            _pureReactCarousel.Slide,\n            { index: 0 },\n            'I am the first Slide.'\n          ),\n          _react2.default.createElement(\n            _pureReactCarousel.Slide,\n            { index: 1 },\n            'I am the second Slide.'\n          ),\n          _react2.default.createElement(\n            _pureReactCarousel.Slide,\n            { index: 2 },\n            'I am the third Slide.'\n          )\n        ),\n        _react2.default.createElement(\n          _pureReactCarousel.ButtonBack,\n          null,\n          'Back'\n        ),\n        _react2.default.createElement(\n          _pureReactCarousel.ButtonNext,\n          null,\n          'Next'\n        )\n      );\n    }\n  }]);\n\n  return Carousel;\n}(_react2.default.Component);\n\nexports.default = Carousel;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTg5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanM/OWFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxQcm92aWRlciwgU2xpZGVyLCBTbGlkZSwgQnV0dG9uQmFjaywgQnV0dG9uTmV4dCB9IGZyb20gJ3B1cmUtcmVhY3QtY2Fyb3VzZWwnO1xuaW1wb3J0ICdwdXJlLXJlYWN0LWNhcm91c2VsL2Rpc3QvcmVhY3QtY2Fyb3VzZWwuZXMuY3NzJztcblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJvdXNlbFByb3ZpZGVyXG4gICAgICAgIG5hdHVyYWxTbGlkZVdpZHRoPXsxMDB9XG4gICAgICAgIG5hdHVyYWxTbGlkZUhlaWdodD17MTI1fVxuICAgICAgICB0b3RhbFNsaWRlcz17M31cbiAgICAgID5cbiAgICAgICAgPFNsaWRlcj5cbiAgICAgICAgICA8U2xpZGUgaW5kZXg9ezB9PkkgYW0gdGhlIGZpcnN0IFNsaWRlLjwvU2xpZGU+XG4gICAgICAgICAgPFNsaWRlIGluZGV4PXsxfT5JIGFtIHRoZSBzZWNvbmQgU2xpZGUuPC9TbGlkZT5cbiAgICAgICAgICA8U2xpZGUgaW5kZXg9ezJ9PkkgYW0gdGhlIHRoaXJkIFNsaWRlLjwvU2xpZGU+XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgICA8QnV0dG9uQmFjaz5CYWNrPC9CdXR0b25CYWNrPlxuICAgICAgICA8QnV0dG9uTmV4dD5OZXh0PC9CdXR0b25OZXh0PlxuICAgICAgPC9DYXJvdXNlbFByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9DYXJvdXNlbC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWNBOzs7O0FBakJBO0FBQ0E7QUFtQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///589\n");

/***/ })

})