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

var MicrophoneVariantOffIcon = function MicrophoneVariantOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,5.27L3.28,4L20,20.72L18.73,22L16,19.26C15.86,21.35 14.12,23 12,23C9.79,23 8,21.21 8,19V18H7L6.16,9.82C5.82,9.47 5.53,9.06 5.33,8.6L2,5.27M9,3C11.21,3 13,4.79 13,7H8.82L6.08,4.26C6.81,3.5 7.85,3 9,3M11.84,9.82L11.82,10L9.82,8H12.87C12.69,8.7 12.33,9.32 11.84,9.82M11,18H10V19C10,20.1 10.9,21 12,21C13.1,21 14,20.1 14,19V17.27L11.35,14.62L11,18M18,10H20L19,11L20,12H18C16.9,12 16,12.9 16,14V14.18L14.3,12.5C14.9,11 16.33,10 18,10M8,12C8,12.55 8.45,13 9,13C9.21,13 9.4,12.94 9.56,12.83L8.17,11.44C8.06,11.6 8,11.79 8,12Z"
  }));
};

MicrophoneVariantOffIcon.displayName = 'MicrophoneVariantOffIcon';
MicrophoneVariantOffIcon.defaultProps = {
  size: 24
};
var _default = MicrophoneVariantOffIcon;
exports["default"] = _default;