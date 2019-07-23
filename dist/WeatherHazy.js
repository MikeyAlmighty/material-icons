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

var WeatherHazyIcon = function WeatherHazyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64M14,15C14,14.45 13.55,14 13,14H3C2.45,14 2,14.45 2,15C2,15.55 2.45,16 3,16H13C13.55,16 14,15.55 14,15M22,15C22,14.45 21.55,14 21,14H17C16.45,14 16,14.45 16,15C16,15.55 16.45,16 17,16H21C21.55,16 22,15.55 22,15M10,19C10,19.55 10.45,20 11,20H20C20.55,20 21,19.55 21,19C21,18.45 20.55,18 20,18H11C10.45,18 10,18.45 10,19M3,19C3,19.55 3.45,20 4,20H7C7.55,20 8,19.55 8,19C8,18.45 7.55,18 7,18H4C3.45,18 3,18.45 3,19M12,9C13.66,9 15,10.34 15,12H17C17,9.24 14.76,7 12,7C9.24,7 7,9.24 7,12H9C9,10.34 10.34,9 12,9Z"
  }));
};

WeatherHazyIcon.displayName = 'WeatherHazyIcon';
WeatherHazyIcon.defaultProps = {
  size: 24
};
var _default = WeatherHazyIcon;
exports["default"] = _default;