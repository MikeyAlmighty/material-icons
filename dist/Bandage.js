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

var BandageIcon = function BandageIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.73,12L21.71,8.04C22.1,7.65 22.1,7 21.71,6.63L17.37,2.29C17,1.9 16.35,1.9 15.96,2.29L12,6.27L8,2.29C7.8,2.1 7.55,2 7.29,2C7.04,2 6.78,2.1 6.59,2.29L2.25,6.63C1.86,7 1.86,7.65 2.25,8.04L6.23,12L2.25,16C1.86,16.39 1.86,17 2.25,17.41L6.59,21.75C7,22.14 7.61,22.14 8,21.75L12,17.77L15.96,21.75C16.16,21.95 16.41,22.04 16.67,22.04C16.93,22.04 17.18,21.94 17.38,21.75L21.72,17.41C22.11,17 22.11,16.39 21.72,16L17.73,12M12,9C12.55,9 13,9.45 13,10C13,10.55 12.55,11 12,11C11.45,11 11,10.55 11,10C11,9.45 11.45,9 12,9M7.29,10.96L3.66,7.34L7.29,3.71L10.91,7.33L7.29,10.96M10,13C9.45,13 9,12.55 9,12C9,11.45 9.45,11 10,11C10.55,11 11,11.45 11,12C11,12.55 10.55,13 10,13M12,15C11.45,15 11,14.55 11,14C11,13.45 11.45,13 12,13C12.55,13 13,13.45 13,14C13,14.55 12.55,15 12,15M14,11C14.55,11 15,11.45 15,12C15,12.55 14.55,13 14,13C13.45,13 13,12.55 13,12C13,11.45 13.45,11 14,11M16.66,20.34L13.03,16.72L16.66,13.09L20.28,16.71L16.66,20.34Z"
  }));
};

BandageIcon.displayName = 'BandageIcon';
BandageIcon.defaultProps = {
  size: 24
};
var _default = BandageIcon;
exports["default"] = _default;