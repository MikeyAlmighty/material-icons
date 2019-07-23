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

var ViolinIcon = function ViolinIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11,2C10.45,2 10,2.45 10,3V5L10,9C10,9.28 10.22,9.5 10.5,9.5H12C12.28,9.5 12.5,9.72 12.5,10C12.5,10.28 12.28,10.5 12,10.5H10.5C9.73,10.5 9,9.77 9,9V5.16C7.27,5.6 6,7.13 6,9V10.5C7.38,10.5 8.5,11.62 8.5,13C8.5,14.38 7.38,15.5 6,15.5V17C6,19.77 8.23,22 11,22H13C15.77,22 18,19.77 18,17V15.5C16.62,15.5 15.5,14.38 15.5,13C15.5,11.62 16.62,10.5 18,10.5V9C18,6.78 16.22,5 14,5V3C14,2.45 13.55,2 13,2H11M10.75,16.5H13.25L12.75,20H11.25L10.75,16.5Z"
  }));
};

ViolinIcon.displayName = 'ViolinIcon';
ViolinIcon.defaultProps = {
  size: 24
};
var _default = ViolinIcon;
exports["default"] = _default;