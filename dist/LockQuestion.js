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

var LockQuestionIcon = function LockQuestionIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,1C9.24,1 7,3.24 7,6V8H6C4.9,8 4,8.9 4,10V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V10C20,8.9 19.1,8 18,8H17V6C17,3.24 14.76,1 12,1M12,2.9C13.71,2.9 15.1,4.29 15.1,6V8H8.9V6C8.9,4.29 10.29,2.9 12,2.9M12.19,10.5C13.13,10.5 13.88,10.71 14.42,11.12C14.96,11.54 15.23,12.1 15.23,12.8C15.23,13.24 15.08,13.63 14.79,14C14.5,14.36 14.12,14.64 13.66,14.85C13.4,15 13.23,15.15 13.14,15.32C13.05,15.5 13,15.72 13,16H11C11,15.5 11.1,15.16 11.29,14.92C11.5,14.68 11.84,14.4 12.36,14.08C12.62,13.94 12.83,13.76 13,13.54C13.14,13.33 13.22,13.08 13.22,12.8C13.22,12.5 13.13,12.28 12.95,12.11C12.77,11.93 12.5,11.85 12.19,11.85C11.92,11.85 11.7,11.92 11.5,12.06C11.34,12.2 11.24,12.41 11.24,12.69H9.27C9.22,12 9.5,11.4 10.05,11.04C10.59,10.68 11.3,10.5 12.19,10.5M11,17H13V19H11V17Z"
  }));
};

LockQuestionIcon.displayName = 'LockQuestionIcon';
LockQuestionIcon.defaultProps = {
  size: 24
};
var _default = LockQuestionIcon;
exports["default"] = _default;