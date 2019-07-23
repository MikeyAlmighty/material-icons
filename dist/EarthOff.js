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

var EarthOffIcon = function EarthOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,5.27L20.5,6.75C21.46,8.28 22,10.07 22,12C22,17.52 17.52,22 12,22C10.08,22 8.28,21.46 6.75,20.5L5.27,22L4,20.72L20.72,4L22,5.27M17.9,17.39C19.2,15.97 20,14.08 20,12C20,10.63 19.66,9.34 19.05,8.22L14.83,12.44C14.94,12.6 15,12.79 15,13V16H16C16.89,16 17.64,16.59 17.9,17.39M11,19.93V18C10.5,18 10.07,17.83 9.73,17.54L8.22,19.05C9.07,19.5 10,19.8 11,19.93M15,4.59V5C15,6.1 14.1,7 13,7H11V9C11,9.55 10.55,10 10,10H8V12H10.18L8.09,14.09L4.21,10.21C4.08,10.78 4,11.38 4,12C4,13.74 4.56,15.36 5.5,16.67L4.08,18.1C2.77,16.41 2,14.3 2,12C2,6.48 6.48,2 12,2C14.3,2 16.41,2.77 18.1,4.08L16.67,5.5C16.16,5.14 15.6,4.83 15,4.59Z"
  }));
};

EarthOffIcon.displayName = 'EarthOffIcon';
EarthOffIcon.defaultProps = {
  size: 24
};
var _default = EarthOffIcon;
exports["default"] = _default;