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

var Rotate3DIcon = function Rotate3DIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.47,21.5C4.2,19.94 1.86,16.76 1.5,13H0C0.5,19.16 5.66,24 11.95,24L12.61,23.97L8.8,20.16L7.47,21.5M8.36,14.96C8.17,14.96 8,14.93 7.84,14.88C7.68,14.82 7.55,14.75 7.44,14.64C7.33,14.54 7.24,14.42 7.18,14.27C7.12,14.13 7.09,13.97 7.09,13.8H5.79C5.79,14.16 5.86,14.5 6,14.75C6.14,15 6.33,15.25 6.56,15.44C6.8,15.62 7.07,15.76 7.38,15.85C7.68,15.95 8,16 8.34,16C8.71,16 9.06,15.95 9.37,15.85C9.69,15.75 9.97,15.6 10.2,15.41C10.43,15.22 10.62,15 10.75,14.69C10.88,14.4 10.95,14.08 10.95,13.72C10.95,13.53 10.93,13.34 10.88,13.16C10.83,13 10.76,12.81 10.65,12.65C10.55,12.5 10.41,12.35 10.25,12.22C10.08,12.09 9.88,12 9.64,11.91C9.84,11.82 10,11.71 10.16,11.58C10.31,11.45 10.43,11.31 10.53,11.16C10.63,11 10.7,10.86 10.75,10.7C10.8,10.54 10.82,10.38 10.82,10.22C10.82,9.86 10.76,9.54 10.64,9.26C10.5,9 10.35,8.75 10.13,8.57C9.93,8.38 9.66,8.24 9.36,8.14C9.05,8.05 8.71,8 8.34,8C8,8 7.65,8.05 7.34,8.16C7.04,8.27 6.77,8.42 6.55,8.61C6.34,8.8 6.17,9 6.04,9.28C5.92,9.54 5.86,9.82 5.86,10.13H7.16C7.16,9.96 7.19,9.81 7.25,9.68C7.31,9.55 7.39,9.43 7.5,9.34C7.61,9.25 7.73,9.17 7.88,9.12C8.03,9.07 8.18,9.04 8.36,9.04C8.76,9.04 9.06,9.14 9.25,9.35C9.44,9.55 9.54,9.84 9.54,10.21C9.54,10.39 9.5,10.55 9.46,10.7C9.41,10.85 9.32,10.97 9.21,11.07C9.1,11.17 8.96,11.25 8.8,11.31C8.64,11.37 8.44,11.4 8.22,11.4H7.45V12.43H8.22C8.44,12.43 8.64,12.45 8.82,12.5C9,12.55 9.15,12.63 9.27,12.73C9.39,12.84 9.5,12.97 9.56,13.13C9.63,13.29 9.66,13.5 9.66,13.7C9.66,14.11 9.54,14.42 9.31,14.63C9.08,14.86 8.76,14.96 8.36,14.96M16.91,9.04C16.59,8.71 16.21,8.45 15.77,8.27C15.34,8.09 14.85,8 14.31,8H11.95V16H14.25C14.8,16 15.31,15.91 15.76,15.73C16.21,15.55 16.6,15.3 16.92,14.97C17.24,14.64 17.5,14.24 17.66,13.78C17.83,13.31 17.92,12.79 17.92,12.21V11.81C17.92,11.23 17.83,10.71 17.66,10.24C17.5,9.77 17.23,9.37 16.91,9.04M16.5,12.2C16.5,12.62 16.47,13 16.38,13.33C16.28,13.66 16.14,13.95 15.95,14.18C15.76,14.41 15.5,14.59 15.24,14.71C14.95,14.83 14.62,14.89 14.25,14.89H13.34V9.12H14.31C15.03,9.12 15.58,9.35 15.95,9.81C16.33,10.27 16.5,10.93 16.5,11.8M11.95,0L11.29,0.03L15.1,3.84L16.43,2.5C19.7,4.06 22.04,7.23 22.39,11H23.89C23.39,4.84 18.24,0 11.95,0Z"
  }));
};

Rotate3DIcon.displayName = 'Rotate3DIcon';
Rotate3DIcon.defaultProps = {
  size: 24
};
var _default = Rotate3DIcon;
exports["default"] = _default;