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

var XboxControllerBatteryUnknownIcon = function XboxControllerBatteryUnknownIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21.67,5C22.4,5 23,5.6 23,6.33V19.67C23,20.4 22.4,21 21.67,21H14.33C13.6,21 13,20.4 13,19.67V16.75H7.75C5.75,16.75 5,19 3,20C1,20 -0.5,17 3.5,8.5H3.75L4.19,7.67C4.19,7.67 7,6 8.33,7.23H13V6.33C13,5.6 13.6,5 14.33,5H16V3H20V5H21.67M11,8C10.45,8 10,8.45 10,9C10,9.55 10.45,10 11,10C11.55,10 12,9.55 12,9C12,8.45 11.55,8 11,8M18.19,8C17.32,8 16.62,8.2 16.08,8.59C15.56,9 15.3,9.57 15.31,10.36L15.32,10.39H17.25C17.26,10.09 17.35,9.86 17.53,9.7C17.71,9.55 17.93,9.47 18.19,9.47C18.5,9.47 18.76,9.57 18.94,9.75C19.12,9.94 19.2,10.2 19.2,10.5C19.2,10.82 19.13,11.09 18.97,11.32C18.83,11.55 18.62,11.75 18.36,11.91C17.85,12.25 17.5,12.55 17.31,12.82C17.11,13.08 17,13.5 17,14H19C19,13.69 19.04,13.44 19.13,13.26C19.22,13.08 19.39,12.9 19.64,12.74C20.09,12.5 20.46,12.21 20.75,11.81C21.04,11.41 21.19,11 21.19,10.5C21.19,9.74 20.92,9.13 20.38,8.68C19.85,8.23 19.12,8 18.19,8M17,15V17H19V15H17Z"
  }));
};

XboxControllerBatteryUnknownIcon.displayName = 'XboxControllerBatteryUnknownIcon';
XboxControllerBatteryUnknownIcon.defaultProps = {
  size: 24
};
var _default = XboxControllerBatteryUnknownIcon;
exports["default"] = _default;