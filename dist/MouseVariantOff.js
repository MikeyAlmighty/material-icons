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

var MouseVariantOffIcon = function MouseVariantOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,5.27L3.28,4L20,20.72L18.73,22L17.29,20.56C16.42,22 14.82,23 13,23C10.24,23 8,20.76 8,18V16.9C5.72,16.44 4,14.42 4,12V9H5.73L2,5.27M14,7H10V2.1C12.28,2.56 14,4.58 14,7M8,2.1V6.18L5.38,3.55C6.07,2.83 7,2.31 8,2.1M14,12V12.17L10.82,9H14V12M10,16.9V18C10,19.66 11.34,21 13,21C14.28,21 15.37,20.2 15.8,19.07L12.4,15.67C11.74,16.28 10.92,16.71 10,16.9M16,13C16,10.79 17.79,9 20,9H22L21,10L22,11H20C18.9,11 18,11.9 18,13V16.18L16,14.18V13Z"
  }));
};

MouseVariantOffIcon.displayName = 'MouseVariantOffIcon';
MouseVariantOffIcon.defaultProps = {
  size: 24
};
var _default = MouseVariantOffIcon;
exports["default"] = _default;