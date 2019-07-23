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

var TypewriterIcon = function TypewriterIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,13H16C16,14.1 15.1,15 14,15H10C8.9,15 8,14.1 8,13H4L2,18V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V18M6,20C5.11,20 4.66,18.92 5.29,18.29C5.92,17.66 7,18.11 7,19C7,19.55 6.55,20 6,20M10,20C9.11,20 8.66,18.92 9.29,18.29C9.92,17.66 11,18.11 11,19C11,19.55 10.55,20 10,20M14,20C13.11,20 12.66,18.92 13.29,18.29C13.92,17.66 15,18.11 15,19C15,19.55 14.55,20 14,20M18,20C17.11,20 16.66,18.92 17.29,18.29C17.92,17.66 19,18.11 19,19C19,19.55 18.55,20 18,20M18,10V3H6V10H3V12H21V10M8,5H16V6H8M8,7H14V8H8"
  }));
};

TypewriterIcon.displayName = 'TypewriterIcon';
TypewriterIcon.defaultProps = {
  size: 24
};
var _default = TypewriterIcon;
exports["default"] = _default;