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

var MapCheckOutlineIcon = function MapCheckOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.25,22L15.5,19L16.66,17.82L18.25,19.41L21.84,15.82L23,17.23L18.25,22M20.5,3C20.78,3 21,3.22 21,3.5V13.34C20.37,13.12 19.7,13 19,13V5.7L16,6.86V13.8C15.2,14.27 14.5,14.91 14,15.68V6.87L10,5.47V17.13L13.05,18.2L13,19C13,19.46 13.05,19.92 13.15,20.35L9,18.9L3.66,20.97L3.5,21C3.22,21 3,20.78 3,20.5V5.38C3,5.15 3.15,4.97 3.36,4.9L9,3L15,5.1L20.34,3.03L20.5,3M5,6.46V18.31L8,17.15V5.45L5,6.46Z"
  }));
};

MapCheckOutlineIcon.displayName = 'MapCheckOutlineIcon';
MapCheckOutlineIcon.defaultProps = {
  size: 24
};
var _default = MapCheckOutlineIcon;
exports["default"] = _default;