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

var ArrowDecisionOutlineIcon = function ArrowDecisionOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9.64,13.4C8.63,12.5 7.34,12.03 6,12V15L2,11L6,7V10C7.67,10 9.3,10.57 10.63,11.59C10.22,12.15 9.89,12.76 9.64,13.4M18,15V12C17.5,12 13.5,12.16 13.05,16.2C14.61,16.75 15.43,18.47 14.88,20.03C14.33,21.59 12.61,22.41 11.05,21.86C9.5,21.3 8.67,19.59 9.22,18.03C9.5,17.17 10.2,16.5 11.05,16.2C11.34,12.61 14.4,9.88 18,10V7L22,11L18,15M13,19C13,18.45 12.55,18 12,18C11.45,18 11,18.45 11,19C11,19.55 11.45,20 12,20C12.55,20 13,19.55 13,19M11,11.12C11.58,10.46 12.25,9.89 13,9.43V5H16L12,1L8,5H11V11.12Z"
  }));
};

ArrowDecisionOutlineIcon.displayName = 'ArrowDecisionOutlineIcon';
ArrowDecisionOutlineIcon.defaultProps = {
  size: 24
};
var _default = ArrowDecisionOutlineIcon;
exports["default"] = _default;