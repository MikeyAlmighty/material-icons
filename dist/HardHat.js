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

var HardHatIcon = function HardHatIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9.87,12.15L9,6.46C10.95,5.84 13.05,5.84 15,6.46L14.13,12.15C14.06,12.64 13.63,13 13.13,13H10.86C10.37,13 9.94,12.64 9.87,12.15M22,16V16C22,15.21 21.53,14.5 20.8,14.17C20.32,11.86 18.96,9.83 17,8.5L15.24,13.34C15.1,13.74 14.72,14 14.3,14H9.7C9.28,14 8.9,13.74 8.76,13.34L7,8.5C5.04,9.83 3.68,11.86 3.2,14.16C2.47,14.5 2,15.2 2,16L8.45,17.84C8.81,17.94 9.18,18 9.55,18H14.43C14.8,18 15.17,17.94 15.53,17.84L22,16Z"
  }));
};

HardHatIcon.displayName = 'HardHatIcon';
HardHatIcon.defaultProps = {
  size: 24
};
var _default = HardHatIcon;
exports["default"] = _default;