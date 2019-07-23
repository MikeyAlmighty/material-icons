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

var MapClockIcon = function MapClockIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,12H16.5V16.25L19.36,17.94L18.61,19.16L15,17V12M23,16C23,19.87 19.87,23 16,23C13,23 10.4,21.08 9.42,18.4L8,17.9L2.66,19.97L2.5,20C2.22,20 2,19.78 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2H19.5C19.78,2 20,2.22 20,2.5V10.25C21.81,11.5 23,13.62 23,16M9,16C9,12.83 11.11,10.15 14,9.29V6.11L8,4V15.89L9,16.24C9,16.16 9,16.08 9,16M16,11C13.24,11 11,13.24 11,16C11,18.76 13.24,21 16,21C18.76,21 21,18.76 21,16C21,13.24 18.76,11 16,11Z"
  }));
};

MapClockIcon.displayName = 'MapClockIcon';
MapClockIcon.defaultProps = {
  size: 24
};
var _default = MapClockIcon;
exports["default"] = _default;