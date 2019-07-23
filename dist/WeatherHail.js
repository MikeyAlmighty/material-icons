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

var WeatherHailIcon = function WeatherHailIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,14C6.55,14 7,14.45 7,15C7,15.55 6.55,16 6,16C3.24,16 1,13.76 1,11C1,8.24 3.24,6 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8C21.21,8 23,9.79 23,12C23,14.21 21.21,16 19,16H18C17.45,16 17,15.55 17,15C17,14.45 17.45,14 18,14H19C20.1,14 21,13.1 21,12C21,10.9 20.1,10 19,10H17V9C17,6.24 14.76,4 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8C4.34,8 3,9.34 3,11C3,12.66 4.34,14 6,14M10,18C11.1,18 12,18.9 12,20C12,21.1 11.1,22 10,22C8.9,22 8,21.1 8,20C8,18.9 8.9,18 10,18M14.5,16C15.33,16 16,16.67 16,17.5C16,18.33 15.33,19 14.5,19C13.67,19 13,18.33 13,17.5C13,16.67 13.67,16 14.5,16M10.5,12C11.33,12 12,12.67 12,13.5C12,14.33 11.33,15 10.5,15C9.67,15 9,14.33 9,13.5C9,12.67 9.67,12 10.5,12Z"
  }));
};

WeatherHailIcon.displayName = 'WeatherHailIcon';
WeatherHailIcon.defaultProps = {
  size: 24
};
var _default = WeatherHailIcon;
exports["default"] = _default;