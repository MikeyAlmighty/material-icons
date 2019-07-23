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

var AxisZRotateCounterclockwiseIcon = function AxisZRotateCounterclockwiseIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10,12L14,16L10,20V16.9C5.44,16.44 2,14.42 2,12C2,9.58 5.44,7.56 10,7.1V9.09C6.55,9.43 4,10.6 4,12C4,13.4 6.55,14.57 10,14.91V12M20,12C20,10.6 17.45,9.43 14,9.09V7.1C18.56,7.56 22,9.58 22,12C22,14.16 19.26,16 15.42,16.7L16.12,16L14.92,14.79C17.89,14.36 20,13.27 20,12M11,2H13V13L11,11V2M11,22V21L13,19V22H11Z"
  }));
};

AxisZRotateCounterclockwiseIcon.displayName = 'AxisZRotateCounterclockwiseIcon';
AxisZRotateCounterclockwiseIcon.defaultProps = {
  size: 24
};
var _default = AxisZRotateCounterclockwiseIcon;
exports["default"] = _default;