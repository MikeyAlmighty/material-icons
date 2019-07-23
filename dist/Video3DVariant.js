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

var Video3DVariantIcon = function Video3DVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14,10V14C14,14.28 13.78,14.5 13.5,14.5H12.5V9.5H13.5C13.78,9.5 14,9.72 14,10M21,6.5V17.5L17,13.5V17C17,17.55 16.55,18 16,18H4C3.45,18 3,17.55 3,17V7C3,6.45 3.45,6 4,6H16C16.55,6 17,6.45 17,7V10.5M9.5,9.5C9.5,8.67 8.83,8 8,8H4.5V9.5H8V11.25H5.5V12.75H8V14.5H4.5V16H8C8.83,16 9.5,15.33 9.5,14.5M15.5,9.5C15.5,8.67 14.83,8 14,8H11V16H14C14.83,16 15.5,15.33 15.5,14.5"
  }));
};

Video3DVariantIcon.displayName = 'Video3DVariantIcon';
Video3DVariantIcon.defaultProps = {
  size: 24
};
var _default = Video3DVariantIcon;
exports["default"] = _default;