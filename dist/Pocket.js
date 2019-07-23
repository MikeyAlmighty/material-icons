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

var PocketIcon = function PocketIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21.9,4.26C21.64,3.55 20.96,3.07 20.2,3.07H20.19L18.46,3.07H3.81C3.07,3.07 2.39,3.54 2.12,4.24C2.04,4.45 2,4.66 2,4.88V10.92L2.07,12.12C2.36,14.85 3.78,17.23 5.97,18.9C6,18.93 6.05,18.96 6.09,19H6.11C7.29,19.86 8.6,20.44 10,20.73C10.68,20.86 11.35,20.93 12,20.93C12.63,20.93 13.25,20.87 13.85,20.76C13.93,20.75 14,20.73 14.07,20.72C14.09,20.71 14.11,20.7 14.14,20.69C15.5,20.4 16.76,19.83 17.89,19H17.91C17.95,18.96 18,18.93 18.03,18.9C20.22,17.23 21.64,14.85 21.93,12.12L22,10.92V4.88C22,4.68 21.97,4.47 21.9,4.26M17.67,10.55L12.96,15.06C12.7,15.32 12.35,15.44 12,15.44C11.67,15.44 11.33,15.32 11.06,15.06L6.36,10.55C5.81,10.03 5.79,9.16 6.32,8.61C6.84,8.06 7.71,8.05 8.26,8.57L12,12.17L15.77,8.57C16.31,8.05 17.18,8.07 17.71,8.61C18.23,9.16 18.21,10.03 17.67,10.55Z"
  }));
};

PocketIcon.displayName = 'PocketIcon';
PocketIcon.defaultProps = {
  size: 24
};
var _default = PocketIcon;
exports["default"] = _default;