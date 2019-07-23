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

var BiathlonIcon = function BiathlonIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12.88,3.64C13.65,3.64 14.28,4.27 14.28,5.04C14.28,5.81 13.65,6.44 12.88,6.44C12.11,6.44 11.5,5.81 11.5,5.04C11.5,4.27 12.11,3.64 12.88,3.64M15,13H16.5V19H15V13M15,8.5H16.5V10H15V8.5M10.04,2.6L8,2.04L6.06,8.58L3.9,11.42L7.17,12.37L10.04,2.6M19.67,18.55C19.31,18.93 18.88,19.5 18.4,19.7C17.91,19.92 17.54,20 17,20H13.5L13.43,17C13.42,16.83 13.37,16.67 13.28,16.5L10.88,12.24L11.76,9.5C12.34,10.55 13,11.73 13.06,11.83C13.21,12 13.45,12.13 13.69,12.13H15.9C16.35,12.13 16.71,11.77 16.71,11.32C16.71,10.9 16.38,10.56 15.96,10.53L14.29,10.4L12.4,7C12.4,7 12,6.42 11.14,6.42C10.27,6.42 10,6.84 9.83,7.42L6,20H3V22H17C18.37,22 19.53,21.34 20.5,20.37L19.67,18.55M9.75,14.39L11.62,17.39L11.75,20H7.75L9.75,14.39Z"
  }));
};

BiathlonIcon.displayName = 'BiathlonIcon';
BiathlonIcon.defaultProps = {
  size: 24
};
var _default = BiathlonIcon;
exports["default"] = _default;