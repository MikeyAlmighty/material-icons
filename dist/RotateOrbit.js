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

var RotateOrbitIcon = function RotateOrbitIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8,14.25L4.75,11H7C7.25,5.39 9.39,1 12,1C14,1 15.77,3.64 16.55,7.45C20.36,8.23 23,10 23,12C23,13.83 20.83,15.43 17.6,16.3L17.89,14.27C19.8,13.72 21,12.91 21,12C21,10.94 19.35,10 16.87,9.5C16.95,10.29 17,11.13 17,12C17,18.08 14.76,23 12,23C10.17,23 8.57,20.83 7.7,17.6L9.73,17.89C10.28,19.8 11.09,21 12,21C13.66,21 15,16.97 15,12C15,11 14.95,10.05 14.85,9.15C13.95,9.05 13,9 12,9L10.14,9.06L10.43,7.05L12,7C12.87,7 13.71,7.05 14.5,7.13C14,4.65 13.06,3 12,3C10.46,3 9.18,6.5 9,11H11.25L8,14.25M14.25,16L11,19.25V17C5.39,16.75 1,14.61 1,12C1,10.17 3.17,8.57 6.4,7.7L6.11,9.73C4.2,10.28 3,11.09 3,12C3,13.54 6.5,14.82 11,15V12.75L14.25,16Z"
  }));
};

RotateOrbitIcon.displayName = 'RotateOrbitIcon';
RotateOrbitIcon.defaultProps = {
  size: 24
};
var _default = RotateOrbitIcon;
exports["default"] = _default;