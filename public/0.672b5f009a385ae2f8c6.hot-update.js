webpackHotUpdate(0,{

/***/ 591:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./frontend/components/Carousel.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//var React = require('react');\n//import ReactDOM from 'react-dom';\n//var ReactDOM = require('react-dom');\nvar Carousel = __webpack_require__(/*! react-responsive-carousel */ 922).Carousel;\n\nvar DemoCarousel = _react2.default.createClass({\n    displayName: 'DemoCarousel',\n    render: function render() {\n        return _react2.default.createElement(\n            Carousel,\n            { showArrows: true,\n                onChange: onChange,\n                onClickItem: onClickItem,\n                onClickThumb: onClickThumb },\n            _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement('img', { src: 'assets/1.jpeg' }),\n                _react2.default.createElement(\n                    'p',\n                    { className: 'legend' },\n                    ' Legend 1 '\n                ),\n                ' '\n            ),\n            ' ',\n            _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement('img', { src: 'assets/2.jpeg' }),\n                _react2.default.createElement(\n                    'p',\n                    { className: 'legend' },\n                    ' Legend 2 '\n                ),\n                ' '\n            ),\n            ' ',\n            _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement('img', { src: 'assets/3.jpeg' }),\n                _react2.default.createElement(\n                    'p',\n                    { className: 'legend' },\n                    ' Legend 3 '\n                ),\n                ' '\n            ),\n            ' ',\n            _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement('img', { src: 'assets/4.jpeg' }),\n                _react2.default.createElement(\n                    'p',\n                    { className: 'legend' },\n                    ' Legend 4 '\n                ),\n                ' '\n            ),\n            ' ',\n            _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement('img', { src: 'assets/5.jpeg' }),\n                _react2.default.createElement(\n                    'p',\n                    { className: 'legend' },\n                    ' Legend 5 '\n                ),\n                ' '\n            ),\n            ' ',\n            _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement('img', { src: 'assets/6.jpeg' }),\n                _react2.default.createElement(\n                    'p',\n                    { className: 'legend' },\n                    ' Legend 6 '\n                ),\n                ' '\n            ),\n            ' '\n        );\n    }\n});\nReactDOM.render(_react2.default.createElement(DemoCarousel, null), document.querySelector('.demo-carousel'));\n\n// Don't forget to include the css in your page \n// <link rel=\"stylesheet\" href=\"carousel.css\"/>\n// Begin DemoSliderControls//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanM/OWFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vL3ZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbi8vaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbi8vdmFyIFJlYWN0RE9NID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XHJcbnZhciBDYXJvdXNlbCA9IHJlcXVpcmUoJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnKS5DYXJvdXNlbDtcclxuXHJcbnZhciBEZW1vQ2Fyb3VzZWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuICggPCBDYXJvdXNlbCBzaG93QXJyb3dzID0ge1xyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlID0ge1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkNsaWNrSXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25DbGlja1RodW1iID0ge1xyXG4gICAgICAgICAgICAgICAgb25DbGlja1RodW1iXHJcbiAgICAgICAgICAgIH0gPlxyXG4gICAgICAgICAgICA8IGRpdiA+XHJcbiAgICAgICAgICAgIDwgaW1nIHNyYyA9IFwiYXNzZXRzLzEuanBlZ1wiIC8gPlxyXG4gICAgICAgICAgICA8IHAgY2xhc3NOYW1lID0gXCJsZWdlbmRcIiA+IExlZ2VuZCAxIDwgL3A+IDwgL2RpdiA+IDwgZGl2ID5cclxuICAgICAgICAgICAgPCBpbWcgc3JjID0gXCJhc3NldHMvMi5qcGVnXCIgLyA+XHJcbiAgICAgICAgICAgIDwgcCBjbGFzc05hbWUgPSBcImxlZ2VuZFwiID4gTGVnZW5kIDIgPCAvcD4gPCAvZGl2ID4gPCBkaXYgPlxyXG4gICAgICAgICAgICA8IGltZyBzcmMgPSBcImFzc2V0cy8zLmpwZWdcIiAvID5cclxuICAgICAgICAgICAgPCBwIGNsYXNzTmFtZSA9IFwibGVnZW5kXCIgPiBMZWdlbmQgMyA8IC9wPiA8IC9kaXYgPiA8IGRpdiA+XHJcbiAgICAgICAgICAgIDwgaW1nIHNyYyA9IFwiYXNzZXRzLzQuanBlZ1wiIC8gPlxyXG4gICAgICAgICAgICA8IHAgY2xhc3NOYW1lID0gXCJsZWdlbmRcIiA+IExlZ2VuZCA0IDwgL3A+IDwgL2RpdiA+IDwgZGl2ID5cclxuICAgICAgICAgICAgPCBpbWcgc3JjID0gXCJhc3NldHMvNS5qcGVnXCIgLyA+XHJcbiAgICAgICAgICAgIDwgcCBjbGFzc05hbWUgPSBcImxlZ2VuZFwiID4gTGVnZW5kIDUgPCAvcD4gPCAvZGl2ID4gPCBkaXYgPlxyXG4gICAgICAgICAgICA8IGltZyBzcmMgPSBcImFzc2V0cy82LmpwZWdcIiAvID5cclxuICAgICAgICAgICAgPCBwIGNsYXNzTmFtZSA9IFwibGVnZW5kXCIgPiBMZWdlbmQgNiA8IC9wPiA8IC9kaXYgPiA8IC9DYXJvdXNlbD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuUmVhY3RET00ucmVuZGVyKCA8IERlbW9DYXJvdXNlbCAvID4gLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVtby1jYXJvdXNlbCcpKTtcclxuXHJcbi8vIERvbid0IGZvcmdldCB0byBpbmNsdWRlIHRoZSBjc3MgaW4geW91ciBwYWdlIFxyXG4vLyA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNhcm91c2VsLmNzc1wiLz5cclxuLy8gQmVnaW4gRGVtb1NsaWRlckNvbnRyb2xzXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0Nhcm91c2VsLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBR0E7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFaQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFkQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBaEJBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFsQkE7QUFvQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQXBCQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBdEJBO0FBQUE7QUEwQkE7QUE1QkE7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///591\n");

/***/ })

})