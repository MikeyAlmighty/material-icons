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

var CampfireIcon = function CampfireIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15.9,18.5L21.9,20.1L21.5,22L12.1,19.5L2.7,22L2.2,20.1L8.2,18.5L2.1,16.9L2.6,15L12,17.5L21.4,15L21.9,16.9L15.9,18.5M16.07,7.92C15.91,7.7 15.71,7.5 15.5,7.33C15.05,6.9 14.5,6.59 14.06,6.13C13,5.08 12.79,3.34 13.44,2C12.79,2.17 12.18,2.54 11.67,2.95C9.84,4.46 9.11,7.1 10,9.38C10,9.45 10.04,9.53 10.04,9.62C10.04,9.78 9.93,9.92 9.79,10C9.63,10.05 9.46,10 9.33,9.9C9.28,9.86 9.25,9.82 9.22,9.77C8.42,8.74 8.29,7.26 8.84,6.07C7.65,7.06 7,8.72 7.11,10.29C7.13,10.65 7.18,11 7.3,11.36C7.41,11.8 7.59,12.23 7.82,12.61C8.57,13.86 9.9,14.76 11.32,14.94C12.84,15.14 14.46,14.85 15.63,13.79C16.93,12.59 17.4,10.67 16.71,9L16.61,8.83C16.47,8.5 16.28,8.2 16.04,7.93L16.07,7.92M13.83,12.47C13.63,12.65 13.31,12.83 13.05,12.91C12.26,13.19 11.46,12.79 11,12.31C11.84,12.11 12.34,11.47 12.5,10.83C12.61,10.25 12.39,9.78 12.29,9.22C12.21,8.69 12.22,8.23 12.42,7.73C12.55,8 12.69,8.28 12.86,8.5C13.41,9.22 14.27,9.54 14.45,10.5C14.47,10.63 14.5,10.72 14.5,10.83C14.5,11.43 14.26,12.07 13.82,12.47"
  }));
};

CampfireIcon.displayName = 'CampfireIcon';
CampfireIcon.defaultProps = {
  size: 24
};
var _default = CampfireIcon;
exports["default"] = _default;