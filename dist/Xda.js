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

var XdaIcon = function XdaIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M-0.05,16.79L3.19,12.97L-0.05,9.15L1.5,7.86L4.5,11.41L7.5,7.86L9.05,9.15L5.81,12.97L9.05,16.79L7.5,18.07L4.5,14.5L1.5,18.07L-0.05,16.79M24,17C24,17.55 23.55,18 23,18H20C18.9,18 18,17.1 18,16V14C18,12.9 18.9,12 20,12H22V10H18V8H23C23.55,8 24,8.45 24,9M22,14H20V16H22V14M16,17C16,17.55 15.55,18 15,18H12C10.9,18 10,17.1 10,16V10C10,8.9 10.9,8 12,8H14V5H16V17M14,16V10H12V16H14Z"
  }));
};

XdaIcon.displayName = 'XdaIcon';
XdaIcon.defaultProps = {
  size: 24
};
var _default = XdaIcon;
exports["default"] = _default;