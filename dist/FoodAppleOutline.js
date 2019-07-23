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

var FoodAppleOutlineIcon = function FoodAppleOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,10C18.58,7.57 15.5,6.69 13,8V3H11V8C8.5,6.69 5.42,7.57 4,10C2,13 7,22 9,22C11,22 11,21 12,21C13,21 13,22 15,22C17,22 22,13 20,10M18.25,13.38C17.63,15.85 16.41,18.12 14.7,20C14.5,20 14.27,19.9 14.1,19.75C12.87,18.76 11.13,18.76 9.9,19.75C9.73,19.9 9.5,20 9.3,20C7.59,18.13 6.36,15.85 5.75,13.39C5.5,12.66 5.45,11.87 5.66,11.12C6.24,10.09 7.32,9.43 8.5,9.4C9.06,9.41 9.61,9.54 10.11,9.79L11,10.24H13L13.89,9.79C14.39,9.54 14.94,9.41 15.5,9.4C16.68,9.43 17.76,10.08 18.34,11.11C18.55,11.86 18.5,12.65 18.25,13.38M11,5C5.38,8.07 4.11,3.78 4.11,3.78C4.11,3.78 6.77,0.19 11,5Z"
  }));
};

FoodAppleOutlineIcon.displayName = 'FoodAppleOutlineIcon';
FoodAppleOutlineIcon.defaultProps = {
  size: 24
};
var _default = FoodAppleOutlineIcon;
exports["default"] = _default;