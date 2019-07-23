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

var ThermometerLinesIcon = function ThermometerLinesIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17,3H21V5H17V3M17,7H21V9H17V7M17,11H21V13H17.75L17,12.1V11M21,15V17H19C19,16.31 18.9,15.63 18.71,15H21M17,17C17,19.76 14.76,22 12,22C9.24,22 7,19.76 7,17C7,15.36 7.79,13.91 9,13V5C9,3.34 10.34,2 12,2C13.66,2 15,3.34 15,5V13C16.21,13.91 17,15.36 17,17M11,8V14.17C9.83,14.58 9,15.69 9,17C9,18.66 10.34,20 12,20C13.66,20 15,18.66 15,17C15,15.69 14.17,14.58 13,14.17V8H11M7,3V5H3V3H7M7,7V9H3V7H7M7,11V12.1L6.25,13H3V11H7M3,15H5.29C5.1,15.63 5,16.31 5,17H3V15Z"
  }));
};

ThermometerLinesIcon.displayName = 'ThermometerLinesIcon';
ThermometerLinesIcon.defaultProps = {
  size: 24
};
var _default = ThermometerLinesIcon;
exports["default"] = _default;