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

var EvernoteIcon = function EvernoteIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15.09,11.63C15.09,11.63 15.28,10.35 16,10.35C16.76,10.35 17.78,12.06 17.78,12.06C17.78,12.06 15.46,11.63 15.09,11.63M19,4.69C18.64,4.09 16.83,3.41 15.89,3.41C14.96,3.41 13.5,3.41 13.5,3.41C13.5,3.41 12.7,2 10.88,2C9.05,2 9.17,2.81 9.17,3.5V6.32L8.34,7.19H4.5C4.5,7.19 3.44,7.91 3.44,9.44C3.44,11 3.92,16.35 7.13,16.85C10.93,17.43 11.58,15.67 11.58,15.46C11.58,14.56 11.6,13.21 11.6,13.21C11.6,13.21 12.71,15.33 14.39,15.33C16.07,15.33 17.04,16.3 17.04,17.29C17.04,18.28 17.04,19.13 17.04,19.13C17.04,19.13 17,20.28 16,20.28C15,20.28 13.89,20.28 13.89,20.28C13.89,20.28 13.2,19.74 13.2,19C13.2,18.25 13.53,18.05 13.93,18.05C14.32,18.05 14.65,18.09 14.65,18.09V16.53C14.65,16.53 11.47,16.5 11.47,18.94C11.47,21.37 13.13,22 14.46,22C15.8,22 16.63,22 16.63,22C16.63,22 20.56,21.5 20.56,13.75C20.56,6 19.33,5.28 19,4.69M7.5,6.31H4.26L8.32,2.22V5.5L7.5,6.31Z"
  }));
};

EvernoteIcon.displayName = 'EvernoteIcon';
EvernoteIcon.defaultProps = {
  size: 24
};
var _default = EvernoteIcon;
exports["default"] = _default;