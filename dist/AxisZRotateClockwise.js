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

var AxisZRotateClockwiseIcon = function AxisZRotateClockwiseIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14,12L10,16L14,20V16.9C18.56,16.44 22,14.42 22,12C22,9.58 18.56,7.56 14,7.1V9.09C17.45,9.43 20,10.6 20,12C20,13.4 17.45,14.57 14,14.91V12M4,12C4,10.6 6.55,9.43 10,9.09V7.1C5.44,7.56 2,9.58 2,12C2,14.16 4.74,16 8.58,16.7L7.88,16L9.08,14.79C6.11,14.36 4,13.27 4,12M13,2H11V13L13,11V2M13,22V21L11,19V22H13Z"
  }));
};

AxisZRotateClockwiseIcon.displayName = 'AxisZRotateClockwiseIcon';
AxisZRotateClockwiseIcon.defaultProps = {
  size: 24
};
var _default = AxisZRotateClockwiseIcon;
exports["default"] = _default;