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

var FaceOutlineIcon = function FaceOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10.25,13C10.25,13.69 9.69,14.25 9,14.25C8.31,14.25 7.75,13.69 7.75,13C7.75,12.31 8.31,11.75 9,11.75C9.69,11.75 10.25,12.31 10.25,13M15,11.75C14.31,11.75 13.75,12.31 13.75,13C13.75,13.69 14.31,14.25 15,14.25C15.69,14.25 16.25,13.69 16.25,13C16.25,12.31 15.69,11.75 15,11.75M22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12M10.66,4.12C12.06,6.44 14.6,8 17.5,8C17.96,8 18.41,7.95 18.84,7.88C17.44,5.56 14.9,4 12,4C11.54,4 11.09,4.05 10.66,4.12M4.42,9.47C6.13,8.5 7.45,6.92 8.08,5.03C6.37,6 5.05,7.58 4.42,9.47M20,12C20,11.22 19.88,10.47 19.67,9.76C18.97,9.91 18.25,10 17.5,10C14.37,10 11.58,8.56 9.74,6.31C8.69,8.87 6.6,10.88 4,11.86C4,11.9 4,11.95 4,12C4,16.41 7.59,20 12,20C16.41,20 20,16.41 20,12Z"
  }));
};

FaceOutlineIcon.displayName = 'FaceOutlineIcon';
FaceOutlineIcon.defaultProps = {
  size: 24
};
var _default = FaceOutlineIcon;
exports["default"] = _default;