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

var MicrophoneVariantIcon = function MicrophoneVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9,3C11.21,3 13,4.79 13,7H5C5,4.79 6.79,3 9,3M11.84,9.82L11,18H10V19C10,20.1 10.9,21 12,21C13.1,21 14,20.1 14,19V14C14,11.79 15.79,10 18,10H20L19,11L20,12H18C16.9,12 16,12.9 16,14V19C16,21.21 14.21,23 12,23C9.79,23 8,21.21 8,19V18H7L6.16,9.82C5.67,9.32 5.31,8.7 5.13,8H12.87C12.69,8.7 12.33,9.32 11.84,9.82M9,11C8.45,11 8,11.45 8,12C8,12.55 8.45,13 9,13C9.55,13 10,12.55 10,12C10,11.45 9.55,11 9,11Z"
  }));
};

MicrophoneVariantIcon.displayName = 'MicrophoneVariantIcon';
MicrophoneVariantIcon.defaultProps = {
  size: 24
};
var _default = MicrophoneVariantIcon;
exports["default"] = _default;