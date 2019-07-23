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

var XingIcon = function XingIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.67,2C17.24,2 17.05,2.27 16.9,2.55C16.9,2.55 10.68,13.57 10.5,13.93L14.58,21.45C14.72,21.71 14.94,22 15.38,22H18.26C18.44,22 18.57,21.93 18.64,21.82C18.72,21.69 18.72,21.53 18.64,21.37L14.57,13.92L20.96,2.63C21.04,2.47 21.04,2.31 20.97,2.18C20.89,2.07 20.76,2 20.58,2M5.55,5.95C5.38,5.95 5.23,6 5.16,6.13C5.08,6.26 5.09,6.41 5.18,6.57L7.12,9.97L4.06,15.37C4,15.53 4,15.69 4.06,15.82C4.13,15.94 4.26,16 4.43,16H7.32C7.75,16 7.96,15.72 8.11,15.45C8.11,15.45 11.1,10.16 11.22,9.95L9.24,6.5C9.1,6.24 8.88,5.95 8.43,5.95"
  }));
};

XingIcon.displayName = 'XingIcon';
XingIcon.defaultProps = {
  size: 24
};
var _default = XingIcon;
exports["default"] = _default;