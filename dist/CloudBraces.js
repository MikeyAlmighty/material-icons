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

var CloudBracesIcon = function CloudBracesIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,20C2.69,20 0,17.31 0,14C0,10.91 2.34,8.36 5.35,8.04C6.6,5.64 9.11,4 12,4C15.63,4 18.66,6.58 19.35,10C21.95,10.19 24,12.36 24,15C24,17.76 21.76,20 19,20H6M18.5,12H18C17.45,12 17,11.55 17,11V10C17,8.9 16.1,8 15,8H13.5V10H15V11C15,12.1 15.9,13 17,13C15.9,13 15,13.9 15,15V16H13.5V18H15C16.1,18 17,17.1 17,16V15C17,14.45 17.45,14 18,14H18.5V12M5.5,12V14H6C6.55,14 7,14.45 7,15V16C7,17.1 7.9,18 9,18H10.5V16H9V15C9,13.9 8.1,13 7,13C8.1,13 9,12.1 9,11V10H10.5V8H9C7.9,8 7,8.9 7,10V11C7,11.55 6.55,12 6,12H5.5Z"
  }));
};

CloudBracesIcon.displayName = 'CloudBracesIcon';
CloudBracesIcon.defaultProps = {
  size: 24
};
var _default = CloudBracesIcon;
exports["default"] = _default;