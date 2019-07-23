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

var SelectionEllipseArrowInsideIcon = function SelectionEllipseArrowInsideIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11.2,4C9.94,4.12 8.72,4.53 7.64,5.2L6.64,3.47C7.95,2.64 9.45,2.13 11,2M17.53,6.25C16.62,5.39 15.53,4.73 14.34,4.33L15,2.39C16.5,2.84 17.89,3.66 19,4.78M5.34,7.41C4.64,8.44 4.19,9.6 4,10.83L2,10.55C2.2,9 2.79,7.5 3.7,6.23M22,12V12.66L20,12.5V12C20,10.92 19.81,9.86 19.39,8.86L21.22,8.06C21.75,9.31 22,10.65 22,12M6,17.3L4.5,18.61C3.47,17.43 2.72,16.04 2.3,14.53L4.17,14C4.53,15.22 5.16,16.35 6,17.3M12.14,22H12C10.5,22 9,21.68 7.64,21.07L8.53,19.24C9.62,19.75 10.8,20 12,20H12.19M17,21H15V15H21V17H18.42L21.14,19.76L19.73,21.17L17,18.5"
  }));
};

SelectionEllipseArrowInsideIcon.displayName = 'SelectionEllipseArrowInsideIcon';
SelectionEllipseArrowInsideIcon.defaultProps = {
  size: 24
};
var _default = SelectionEllipseArrowInsideIcon;
exports["default"] = _default;