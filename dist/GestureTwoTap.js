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

var GestureTwoTapIcon = function GestureTwoTapIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,15.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9C10,8.45 10.45,8 11,8C11.55,8 12,8.45 12,9V7C12,6.45 12.45,6 13,6C13.55,6 14,6.45 14,7V12L18.15,13.84C18.66,14.07 19,14.58 19,15.14M15,10.45V9.24L15,9.23C15.23,9.03 15.42,8.79 15.57,8.54C15.84,8.09 16,7.56 16,7C16,5.34 14.66,4 13,4C12.21,4 11.5,4.31 10.95,4.81L10.81,4.95C10.68,5.09 10.56,5.24 10.46,5.4C10.36,5.56 10.27,5.74 10.2,5.92C10.17,6 10.15,6.06 10.13,6.13C8.9,6.5 8,7.65 8,9C8,9.7 8.24,10.34 8.64,10.85C8.74,11 8.87,11.11 9,11.23V11.24L9,12.46V12.46C7.8,11.77 7,10.5 7,9C7,7.38 7.97,6 9.35,5.35C10,3.97 11.38,3 13,3C15.21,3 17,4.79 17,7C17,8.5 16.2,9.77 15,10.46V10.45Z"
  }));
};

GestureTwoTapIcon.displayName = 'GestureTwoTapIcon';
GestureTwoTapIcon.defaultProps = {
  size: 24
};
var _default = GestureTwoTapIcon;
exports["default"] = _default;