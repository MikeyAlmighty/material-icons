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

var GantryCraneIcon = function GantryCraneIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21,6H22V4H21V3H18V4H6V3H3V4H2V6H3V20H2V22H7V20H6V6H11V7H11.5V10.62C11,10.79 10.69,11.25 10.69,11.76C10.69,12.2 10.92,12.6 11.3,12.82V14H11.92C12.26,14 12.54,14.27 12.55,14.61C12.55,14.96 12.28,15.24 11.93,15.24C11.71,15.24 11.5,15.12 11.39,14.93C11.22,14.64 10.84,14.54 10.55,14.71C10.26,14.87 10.15,15.25 10.32,15.55C10.65,16.12 11.26,16.47 11.92,16.47C12.94,16.46 13.76,15.62 13.75,14.6C13.74,13.83 13.26,13.14 12.53,12.88V12.82C13.12,12.5 13.34,11.78 13.03,11.2C12.92,11 12.74,10.81 12.53,10.7V7H13V6H18V20H17V22H22V20H21V6M5,15.29V16.71L4,17.71V16.29L5,15.29M4,20V19.24L5,18.24V19.66L4.66,20H4M4,7.29L5,6.29V7.71L4,8.71V7.29M4,10.29L5,9.29V10.71L4,11.71V10.29M4,13.29L5,12.29V13.71L4,14.71V13.24L4,13.29M20,15.29V16.71L19,17.71V16.29L20,15.29M19,20V19.24L20,18.24V19.66L19.66,20H19M19,7.29L20,6.29V7.71L19,8.71V7.29M19,10.29L20,9.29V10.71L19,11.71V10.29M19,13.29L20,12.29V13.71L19,14.71V13.24L19,13.29Z"
  }));
};

GantryCraneIcon.displayName = 'GantryCraneIcon';
GantryCraneIcon.defaultProps = {
  size: 24
};
var _default = GantryCraneIcon;
exports["default"] = _default;