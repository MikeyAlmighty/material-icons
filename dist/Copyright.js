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

var CopyrightIcon = function CopyrightIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10.08,10.86C10.13,10.53 10.24,10.24 10.38,10C10.5,9.74 10.72,9.53 10.97,9.37C11.21,9.22 11.5,9.15 11.88,9.14C12.11,9.15 12.32,9.19 12.5,9.27C12.71,9.36 12.89,9.5 13.03,9.63C13.17,9.78 13.28,9.96 13.37,10.16C13.46,10.36 13.5,10.58 13.5,10.8H15.3C15.28,10.33 15.19,9.9 15,9.5C14.85,9.12 14.62,8.78 14.32,8.5C14,8.22 13.66,8 13.24,7.84C12.82,7.68 12.36,7.61 11.85,7.61C11.2,7.61 10.63,7.72 10.15,7.95C9.67,8.18 9.27,8.5 8.95,8.87C8.63,9.26 8.39,9.71 8.24,10.23C8.09,10.75 8,11.29 8,11.87V12.14C8,12.72 8.08,13.26 8.23,13.78C8.38,14.3 8.62,14.75 8.94,15.13C9.26,15.5 9.66,15.82 10.14,16.04C10.62,16.26 11.19,16.38 11.84,16.38C12.31,16.38 12.75,16.3 13.16,16.15C13.57,16 13.93,15.79 14.24,15.5C14.55,15.25 14.8,14.94 15,14.58C15.16,14.22 15.27,13.84 15.28,13.43H13.5C13.5,13.64 13.43,13.83 13.34,14C13.25,14.19 13.13,14.34 13,14.47C12.83,14.6 12.66,14.7 12.46,14.77C12.27,14.84 12.07,14.86 11.86,14.87C11.5,14.86 11.2,14.79 10.97,14.64C10.72,14.5 10.5,14.27 10.38,14C10.24,13.77 10.13,13.47 10.08,13.14C10.03,12.81 10,12.47 10,12.14V11.87C10,11.5 10.03,11.19 10.08,10.86M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20Z"
  }));
};

CopyrightIcon.displayName = 'CopyrightIcon';
CopyrightIcon.defaultProps = {
  size: 24
};
var _default = CopyrightIcon;
exports["default"] = _default;