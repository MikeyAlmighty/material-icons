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

var FolderClockOutlineIcon = function FolderClockOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,12H16.5V16.25L19.36,17.94L18.61,19.16L15,17V12M19,8H3V18H9.29C9.1,17.37 9,16.7 9,16C9,12.13 12.13,9 16,9C17.07,9 18.09,9.24 19,9.67V8M3,20C1.89,20 1,19.1 1,18V6C1,4.9 1.9,4 3,4H9L11,6H19C20.1,6 21,6.9 21,8V11.1C22.24,12.36 23,14.09 23,16C23,19.87 19.87,23 16,23C13.62,23 11.5,21.81 10.25,20H3M16,11C13.24,11 11,13.24 11,16C11,18.76 13.24,21 16,21C18.76,21 21,18.76 21,16C21,13.24 18.76,11 16,11Z"
  }));
};

FolderClockOutlineIcon.displayName = 'FolderClockOutlineIcon';
FolderClockOutlineIcon.defaultProps = {
  size: 24
};
var _default = FolderClockOutlineIcon;
exports["default"] = _default;