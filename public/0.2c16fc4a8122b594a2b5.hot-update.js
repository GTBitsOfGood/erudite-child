webpackHotUpdate(0,{

/***/ 589:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./frontend/components/Carousel.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _pureReactCarousel = __webpack_require__(/*! pure-react-carousel */ 824);\n\n__webpack_require__(/*! pure-react-carousel/dist/react-carousel.es.css */ 1050);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 99);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Carousel = function (_React$Component) {\n  _inherits(Carousel, _React$Component);\n\n  function Carousel(props, context) {\n    _classCallCheck(this, Carousel);\n\n    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props, context));\n\n    _this.handleSelect = _this.handleSelect.bind(_this);\n\n    _this.state = {\n      index: 0,\n      direction: null\n    };\n    return _this;\n  }\n\n  _createClass(Carousel, [{\n    key: 'handleSelect',\n    value: function handleSelect(selectedIndex, e) {\n      alert('selected=' + selectedIndex + ', direction=' + e.direction);\n      this.setState({\n        index: selectedIndex,\n        direction: e.direction\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          index = _state.index,\n          direction = _state.direction;\n\n\n      return _react2.default.createElement(\n        Carousel,\n        {\n          activeIndex: index,\n          direction: direction,\n          onSelect: this.handleSelect\n        },\n        _react2.default.createElement(\n          Carousel.Item,\n          null,\n          _react2.default.createElement('img', { width: 900, height: 500, alt: '900x500', src: '/carousel.png' }),\n          _react2.default.createElement(\n            Carousel.Caption,\n            null,\n            _react2.default.createElement(\n              'h3',\n              null,\n              'First slide label'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'Nulla vitae elit libero, a pharetra augue mollis interdum.'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          Carousel.Item,\n          null,\n          _react2.default.createElement('img', { width: 900, height: 500, alt: '900x500', src: '/carousel.png' }),\n          _react2.default.createElement(\n            Carousel.Caption,\n            null,\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Second slide label'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          Carousel.Item,\n          null,\n          _react2.default.createElement('img', { width: 900, height: 500, alt: '900x500', src: '/carousel.png' }),\n          _react2.default.createElement(\n            Carousel.Caption,\n            null,\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Third slide label'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Carousel;\n}(_react2.default.Component);\n\nrender(_react2.default.createElement(ControlledCarousel, null));\n\nexports.default = Carousel;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTg5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanM/OWFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbFByb3ZpZGVyLCBTbGlkZXIsIFNsaWRlLCBCdXR0b25CYWNrLCBCdXR0b25OZXh0IH0gZnJvbSAncHVyZS1yZWFjdC1jYXJvdXNlbCc7XHJcbmltcG9ydCAncHVyZS1yZWFjdC1jYXJvdXNlbC9kaXN0L3JlYWN0LWNhcm91c2VsLmVzLmNzcyc7XHJcbmltcG9ydCB7SW1hZ2V9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmNsYXNzIENhcm91c2VsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xyXG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlU2VsZWN0ID0gdGhpcy5oYW5kbGVTZWxlY3QuYmluZCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbmRleDogMCxcclxuICAgICAgZGlyZWN0aW9uOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VsZWN0KHNlbGVjdGVkSW5kZXgsIGUpIHtcclxuICAgIGFsZXJ0KGBzZWxlY3RlZD0ke3NlbGVjdGVkSW5kZXh9LCBkaXJlY3Rpb249JHtlLmRpcmVjdGlvbn1gKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpbmRleDogc2VsZWN0ZWRJbmRleCxcclxuICAgICAgZGlyZWN0aW9uOiBlLmRpcmVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGluZGV4LCBkaXJlY3Rpb24gfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgYWN0aXZlSW5kZXg9e2luZGV4fVxyXG4gICAgICAgIGRpcmVjdGlvbj17ZGlyZWN0aW9ufVxyXG4gICAgICAgIG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgPGltZyB3aWR0aD17OTAwfSBoZWlnaHQ9ezUwMH0gYWx0PVwiOTAweDUwMFwiIHNyYz1cIi9jYXJvdXNlbC5wbmdcIiAvPlxyXG4gICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgIDxoMz5GaXJzdCBzbGlkZSBsYWJlbDwvaDM+XHJcbiAgICAgICAgICAgIDxwPk51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlIG1vbGxpcyBpbnRlcmR1bS48L3A+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgPGltZyB3aWR0aD17OTAwfSBoZWlnaHQ9ezUwMH0gYWx0PVwiOTAweDUwMFwiIHNyYz1cIi9jYXJvdXNlbC5wbmdcIiAvPlxyXG4gICAgICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgICAgIDxoMz5TZWNvbmQgc2xpZGUgbGFiZWw8L2gzPlxyXG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvcD5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICA8aW1nIHdpZHRoPXs5MDB9IGhlaWdodD17NTAwfSBhbHQ9XCI5MDB4NTAwXCIgc3JjPVwiL2Nhcm91c2VsLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgPGgzPlRoaXJkIHNsaWRlIGxhYmVsPC9oMz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgUHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbnJlbmRlcig8Q29udHJvbGxlZENhcm91c2VsIC8+KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9DYXJvdXNlbC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFTQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFGQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUZBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBRkE7QUFuQkE7QUE4QkE7Ozs7QUF0REE7QUFDQTtBQXdEQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///589\n");

/***/ })

})