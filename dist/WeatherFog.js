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

var WeatherFogIcon = function WeatherFogIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,15H13C13.55,15 14,15.45 14,16C14,16.55 13.55,17 13,17H3C2.45,17 2,16.55 2,16C2,15.45 2.45,15 3,15M16,15H21C21.55,15 22,15.45 22,16C22,16.55 21.55,17 21,17H16C15.45,17 15,16.55 15,16C15,15.45 15.45,15 16,15M1,12C1,9.24 3.24,7 6,7C7,4.65 9.3,3 12,3C15.43,3 18.24,5.66 18.5,9.03L19,9C21.19,9 22.97,10.76 23,13H21C21,11.9 20.1,11 19,11H17V10C17,7.24 14.76,5 12,5C9.5,5 7.45,6.82 7.06,9.19C6.73,9.07 6.37,9 6,9C4.34,9 3,10.34 3,12C3,12.35 3.06,12.69 3.17,13H1.1L1,12M3,19H5C5.55,19 6,19.45 6,20C6,20.55 5.55,21 5,21H3C2.45,21 2,20.55 2,20C2,19.45 2.45,19 3,19M8,19H21C21.55,19 22,19.45 22,20C22,20.55 21.55,21 21,21H8C7.45,21 7,20.55 7,20C7,19.45 7.45,19 8,19Z"
  }));
};

WeatherFogIcon.displayName = 'WeatherFogIcon';
WeatherFogIcon.defaultProps = {
  size: 24
};
var _default = WeatherFogIcon;
exports["default"] = _default;