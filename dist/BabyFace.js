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

var BabyFaceIcon = function BabyFaceIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M1,12C1,10.19 2.2,8.66 3.86,8.17C5.29,5.11 8.4,3 12,3C15.6,3 18.71,5.11 20.15,8.17C21.8,8.66 23,10.19 23,12C23,13.81 21.8,15.34 20.15,15.83C18.71,18.89 15.6,21 12,21C8.4,21 5.29,18.89 3.86,15.83C2.2,15.34 1,13.81 1,12M14.5,9.25C13.81,9.25 13.25,9.81 13.25,10.5C13.25,11.19 13.81,11.75 14.5,11.75C15.19,11.75 15.75,11.19 15.75,10.5C15.75,9.81 15.19,9.25 14.5,9.25M9.5,9.25C8.81,9.25 8.25,9.81 8.25,10.5C8.25,11.19 8.81,11.75 9.5,11.75C10.19,11.75 10.75,11.19 10.75,10.5C10.75,9.81 10.19,9.25 9.5,9.25M7.5,14C8.26,15.77 10,17 12,17C14,17 15.74,15.77 16.5,14H7.5M3,12C3,12.82 3.5,13.53 4.21,13.84C4.07,13.25 4,12.63 4,12C4,11.37 4.07,10.75 4.21,10.16C3.5,10.47 3,11.18 3,12M21,12C21,11.18 20.5,10.47 19.79,10.16C19.93,10.75 20,11.37 20,12C20,12.63 19.93,13.25 19.79,13.84C20.5,13.53 21,12.82 21,12Z"
  }));
};

BabyFaceIcon.displayName = 'BabyFaceIcon';
BabyFaceIcon.defaultProps = {
  size: 24
};
var _default = BabyFaceIcon;
exports["default"] = _default;