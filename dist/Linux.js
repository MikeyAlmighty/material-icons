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

var LinuxIcon = function LinuxIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14.62,8.35C14.2,8.63 12.87,9.39 12.67,9.54C12.28,9.85 11.92,9.83 11.53,9.53C11.33,9.37 10,8.61 9.58,8.34C9.1,8.03 9.13,7.64 9.66,7.42C11.3,6.73 12.94,6.78 14.57,7.45C15.06,7.66 15.08,8.05 14.62,8.35M21.84,15.63C20.91,13.54 19.64,11.64 18,9.97C17.47,9.42 17.14,8.8 16.94,8.09C16.84,7.76 16.77,7.42 16.7,7.08C16.5,6.2 16.41,5.3 16,4.47C15.27,2.89 14,2.07 12.16,2C10.35,2.05 9,2.81 8.21,4.4C8,4.83 7.85,5.28 7.75,5.74C7.58,6.5 7.43,7.29 7.25,8.06C7.1,8.71 6.8,9.27 6.29,9.77C4.68,11.34 3.39,13.14 2.41,15.12C2.27,15.41 2.13,15.7 2.04,16C1.85,16.66 2.33,17.12 3.03,16.96C3.47,16.87 3.91,16.78 4.33,16.65C4.74,16.5 4.9,16.6 5,17C5.65,19.15 7.07,20.66 9.24,21.5C13.36,23.06 18.17,20.84 19.21,16.92C19.28,16.65 19.38,16.55 19.68,16.65C20.14,16.79 20.61,16.89 21.08,17C21.57,17.09 21.93,16.84 22,16.36C22.03,16.1 21.94,15.87 21.84,15.63"
  }));
};

LinuxIcon.displayName = 'LinuxIcon';
LinuxIcon.defaultProps = {
  size: 24
};
var _default = LinuxIcon;
exports["default"] = _default;