webpackHotUpdate(0,{

/***/ 995:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./frontend/containers/HomePage.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Navbar = __webpack_require__(/*! ../components/Navbar */ 994);\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nvar _SignupForm = __webpack_require__(/*! ../components/SignupForm */ 1223);\n\nvar _SignupForm2 = _interopRequireDefault(_SignupForm);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ 1167);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HomePage = function (_React$Component) {\n  _inherits(HomePage, _React$Component);\n\n  function HomePage() {\n    _classCallCheck(this, HomePage);\n\n    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));\n  }\n\n  _createClass(HomePage, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _semanticUiReact.Container,\n        { fluid: true },\n        _react2.default.createElement(_Navbar2.default, null),\n        _react2.default.createElement(\n          _semanticUiReact.Header,\n          { as: 'h1', floated: 'right' },\n          'What is The Erudite Child'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'home-info-1' },\n          _react2.default.createElement(\n            _semanticUiReact.Grid,\n            null,\n            _react2.default.createElement(\n              _semanticUiReact.Grid.Column,\n              { width: 4 },\n              _react2.default.createElement(_semanticUiReact.Image, { src: '/assets/images/image.png' }),\n              _react2.default.createElement(_semanticUiReact.Image, { src: 'https://water.org/media/images/Waterorg_Homepage_Img-5.original.jpg' })\n            ),\n            _react2.default.createElement(\n              _semanticUiReact.Grid.Column,\n              { width: 9 },\n              _react2.default.createElement(\n                'div',\n                { className: 'home-text-1' },\n                _react2.default.createElement(\n                  'p',\n                  null,\n                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'home-info-2' },\n          _react2.default.createElement(\n            _semanticUiReact.Header,\n            { as: 'h1', floated: 'left' },\n            'They need your help'\n          ),\n          _react2.default.createElement(\n            _semanticUiReact.Grid,\n            { columns: 'equal' },\n            _react2.default.createElement(\n              _semanticUiReact.Grid.Column,\n              null,\n              _react2.default.createElement(\n                _semanticUiReact.Segment,\n                null,\n                _react2.default.createElement(_semanticUiReact.Image, { src: 'https://water.org/media/images/Waterorg_Homepage_Footer.original.jpg' })\n              )\n            ),\n            _react2.default.createElement(\n              _semanticUiReact.Grid.Column,\n              null,\n              _react2.default.createElement(\n                _semanticUiReact.Segment,\n                null,\n                _react2.default.createElement(_semanticUiReact.Image, { src: 'https://water.org/media/images/Waterorg_Homepage_Footer.original.jpg' })\n              )\n            ),\n            _react2.default.createElement(\n              _semanticUiReact.Grid.Column,\n              null,\n              _react2.default.createElement(\n                _semanticUiReact.Segment,\n                null,\n                _react2.default.createElement(_semanticUiReact.Image, { src: 'https://water.org/media/images/Waterorg_Homepage_Footer.original.jpg' })\n              )\n            ),\n            _react2.default.createElement(\n              'div',\n              { className: 'home-text-2' },\n              _react2.default.createElement(\n                'p',\n                null,\n                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'home-info-3' },\n          _react2.default.createElement(\n            _semanticUiReact.Grid,\n            { columns: 2 },\n            _react2.default.createElement(\n              _semanticUiReact.Grid.Column,\n              { stretched: true },\n              _react2.default.createElement(_semanticUiReact.Image, { src: 'https://water.org/media/images/Waterorg_Homepage_Img-4.original.jpg ' })\n            ),\n            _react2.default.createElement(\n              _semanticUiReact.Grid.Column,\n              null,\n              _react2.default.createElement(\n                _semanticUiReact.Grid.Column,\n                null,\n                _react2.default.createElement(\n                  'p',\n                  null,\n                  'Help a Child monthly by Signing up'\n                ),\n                _react2.default.createElement(\n                  _semanticUiReact.Segment,\n                  null,\n                  _react2.default.createElement(_SignupForm2.default, { name: 'Sign up and Donate' })\n                )\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(Footer, null)\n      );\n    }\n  }]);\n\n  return HomePage;\n}(_react2.default.Component);\n\nexports.default = HomePage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTk1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbnRhaW5lcnMvSG9tZVBhZ2UuanM/NzcyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgU2lnbnVwRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1NpZ251cEZvcm0nO1xuaW1wb3J0IHtHcmlkLCBDb250YWluZXIsIFNlZ21lbnQsIEltYWdlLCBIZWFkZXIsIEJ1dHRvbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5jbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPE5hdmJhci8+XG4gICAgICAgIDxIZWFkZXIgYXM9J2gxJyBmbG9hdGVkPSdyaWdodCc+XG4gICAgICAgICAgV2hhdCBpcyBUaGUgRXJ1ZGl0ZSBDaGlsZFxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWluZm8tMVwiPlxuICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2Fzc2V0cy9pbWFnZXMvaW1hZ2UucG5nJyAvPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly93YXRlci5vcmcvbWVkaWEvaW1hZ2VzL1dhdGVyb3JnX0hvbWVwYWdlX0ltZy01Lm9yaWdpbmFsLmpwZ1wiIC8+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs5fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS10ZXh0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXG4gICAgICAgICAgICAgICAgICAgICAgICBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWluZm8tMlwiPlxuICAgICAgICAgPEhlYWRlciBhcz0naDEnIGZsb2F0ZWQ9J2xlZnQnPlxuICAgICAgICAgICBUaGV5IG5lZWQgeW91ciBoZWxwXG4gICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgIDxHcmlkIGNvbHVtbnM9J2VxdWFsJz5cbiAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL3dhdGVyLm9yZy9tZWRpYS9pbWFnZXMvV2F0ZXJvcmdfSG9tZXBhZ2VfRm9vdGVyLm9yaWdpbmFsLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgPEdyaWQuQ29sdW1uID5cbiAgICAgICAgICAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly93YXRlci5vcmcvbWVkaWEvaW1hZ2VzL1dhdGVyb3JnX0hvbWVwYWdlX0Zvb3Rlci5vcmlnaW5hbC5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vd2F0ZXIub3JnL21lZGlhL2ltYWdlcy9XYXRlcm9yZ19Ib21lcGFnZV9Gb290ZXIub3JpZ2luYWwuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXRleHQtMlwiPlxuICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCxcbiAgICAgICAgICAgICAgICAgICBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgICAgICAgICAgICAgICBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXNcbiAgICAgICAgICAgICAgICAgICBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvclxuICAgICAgICAgICAgICAgICAgIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuXG4gICAgICAgICAgICAgICAgICAgRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCxcbiAgICAgICAgICAgICAgICAgICBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtaW5mby0zXCI+XG4gICAgICAgICAgPEdyaWQgY29sdW1ucz17Mn0+XG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3RyZXRjaGVkPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL3dhdGVyLm9yZy9tZWRpYS9pbWFnZXMvV2F0ZXJvcmdfSG9tZXBhZ2VfSW1nLTQub3JpZ2luYWwuanBnIFwiIC8+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgIDxwPkhlbHAgYSBDaGlsZCBtb250aGx5IGJ5IFNpZ25pbmcgdXA8L3A+XG4gICAgICAgICAgICAgICAgICA8U2VnbWVudD48U2lnbnVwRm9ybSBuYW1lPVwiU2lnbiB1cCBhbmQgRG9uYXRlXCIvPjwvU2VnbWVudD5cbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgPC9kaXY+XG4gICAgICAgPEZvb3RlciAvPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb250YWluZXJzL0hvbWVQYWdlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFMQTtBQURBO0FBcUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFoQkE7QUFKQTtBQWlDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBSkE7QUFEQTtBQWFBO0FBeEVBO0FBMkVBOzs7O0FBOUVBO0FBQ0E7QUFnRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///995\n");

/***/ })

})