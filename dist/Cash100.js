"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Svg = (0, _styledComponents["default"])('svg')({
  flex: 'none'
}, _styledSystem.space, _styledSystem.color);

var Cash100Icon = function Cash100Icon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,5H22V20H2V5M20,18V7H4V18H20M17,8C17,9.1 17.9,10 19,10V15C17.9,15 17,15.9 17,17H7C7,15.9 6.1,15 5,15V10C6.1,10 7,9.1 7,8H17M17,13V12C17,10.9 16.33,10 15.5,10C14.67,10 14,10.9 14,12V13C14,14.1 14.67,15 15.5,15C16.33,15 17,14.1 17,13M15.5,11C15.78,11 16,11.22 16,11.5V13.5C16,13.78 15.78,14 15.5,14C15.22,14 15,13.78 15,13.5V11.5C15,11.22 15.22,11 15.5,11M13,13V12C13,10.9 12.33,10 11.5,10C10.67,10 10,10.9 10,12V13C10,14.1 10.67,15 11.5,15C12.33,15 13,14.1 13,13M11.5,11C11.78,11 12,11.22 12,11.5V13.5C12,13.78 11.78,14 11.5,14C11.22,14 11,13.78 11,13.5V11.5C11,11.22 11.22,11 11.5,11M8,15H9V10H8L7,10.5V11.5L8,11V15Z"
  }));
};

Cash100Icon.displayName = 'Cash100Icon';
Cash100Icon.defaultProps = {
  size: 24
};
var _default = Cash100Icon;
exports["default"] = _default;