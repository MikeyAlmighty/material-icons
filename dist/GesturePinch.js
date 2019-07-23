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

var GesturePinchIcon = function GesturePinchIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13,9C13,8.45 13.45,8 14,8C14.55,8 15,8.45 15,9V13.47L16.21,13.6L21.15,15.8C21.67,16.04 22,16.56 22,17.14V21.5C21.97,22.32 21.32,22.97 20.5,23H14C13.62,23 13.26,22.85 13,22.57L8.1,18.37L8.84,17.6C9.03,17.39 9.3,17.28 9.58,17.28H9.8L13,19V9M14,5C15.42,5 16.74,5.76 17.45,7C18.56,8.9 17.91,11.35 16,12.46V11.23C16.64,10.67 17,9.85 17,9C17,7.34 15.66,6 14,6C12.34,6 11,7.34 11,9C11,9.85 11.36,10.67 12,11.23V12.46C10.77,11.75 10,10.43 10,9C10,6.79 11.79,5 14,5M4,9L7,12H5V15H3V12H1L4,9M4,7L1,4H3V1H5V4H7L4,7M9,14C9.73,14 10.41,14.19 11,14.54V15.76C10.47,15.29 9.77,15 9,15C7.34,15 6,16.34 6,18C6,19 6.5,19.87 7.22,20.42L9.31,22H9C6.79,22 5,20.21 5,18C5,15.79 6.79,14 9,14Z"
  }));
};

GesturePinchIcon.displayName = 'GesturePinchIcon';
GesturePinchIcon.defaultProps = {
  size: 24
};
var _default = GesturePinchIcon;
exports["default"] = _default;