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

var AxisXRotateCounterclockwiseIcon = function AxisXRotateCounterclockwiseIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,14L16,10L20,14H16.9C16.44,18.56 14.42,22 12,22C10.12,22 8.47,19.92 7.62,16.84L9.37,15.83C9.87,18.31 10.86,20 12,20C13.4,20 14.57,17.45 14.91,14H12M1.11,17.13L13.89,9.75L13.96,10.54L10.5,14H10.54L2.11,18.87L1.11,17.13M21.89,5.13L22.89,6.87L17.88,9.76C17.79,9.03 17.67,8.33 17.5,7.66L21.89,5.13M12,2C14.3,2 16.23,5.1 16.82,9.32L16,8.5L14.87,9.63C14.5,6.37 13.35,4 12,4C10.42,4 9.12,7.27 9,11.42L7,12.57V12C7,6.5 9.24,2 12,2Z"
  }));
};

AxisXRotateCounterclockwiseIcon.displayName = 'AxisXRotateCounterclockwiseIcon';
AxisXRotateCounterclockwiseIcon.defaultProps = {
  size: 24
};
var _default = AxisXRotateCounterclockwiseIcon;
exports["default"] = _default;