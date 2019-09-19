'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('app is running');

var template = _react2.default.createElement(
  'p',
  null,
  'This is jsx'
);
var appRoot = document.getElementById('app');

_reactDom2.default.render(template, appRoot);
