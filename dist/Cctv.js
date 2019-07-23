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

var CctvIcon = function CctvIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.15,4.94C17.77,4.91 17.37,5 17,5.2L8.35,10.2C7.39,10.76 7.07,12 7.62,12.94L9.12,15.53C9.67,16.5 10.89,16.82 11.85,16.27L13.65,15.23C13.92,15.69 14.32,16.06 14.81,16.27V18.04C14.81,19.13 15.7,20 16.81,20H22V18.04H16.81V16.27C17.72,15.87 18.31,14.97 18.31,14C18.31,13.54 18.19,13.11 17.97,12.73L20.5,11.27C21.47,10.71 21.8,9.5 21.24,8.53L19.74,5.94C19.4,5.34 18.79,5 18.15,4.94M6.22,13.17L2,13.87L2.75,15.17L4.75,18.63L5.5,19.93L8.22,16.63L6.22,13.17Z"
  }));
};

CctvIcon.displayName = 'CctvIcon';
CctvIcon.defaultProps = {
  size: 24
};
var _default = CctvIcon;
exports["default"] = _default;