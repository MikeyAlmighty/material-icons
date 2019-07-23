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

var EmoticonCryIcon = function EmoticonCryIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5.14,17.57C5.14,16.5 6.32,14.5 7.57,12.81C8.82,14.5 10,16.5 10,17.57C10,18.91 8.91,20 7.57,20C6.23,20 5.14,18.91 5.14,17.57M22,12C22,17.52 17.52,22 12,22C11.08,22 10.18,21.86 9.33,21.63C10.9,20.95 12,19.39 12,17.57C12,17.12 11.89,16.6 11.69,16C11.79,16 11.89,16 12,16C13.25,16 14.32,16.5 14.77,17.23L16.19,15.81C15.29,14.72 13.75,14 12,14C11.59,14 11.19,14.04 10.81,14.12C10.38,13.36 9.85,12.53 9.19,11.63L8.71,11C9.42,10.87 10,10.23 10,9.5C10,8.7 9.3,8 8.5,8C7.7,8 7,8.7 7,9.5C7,9.69 7.04,9.87 7.11,10.04L5.96,11.63C4.4,13.75 3.5,15.5 3.23,16.81C2.45,15.38 2,13.74 2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12M17,9.5C17,8.7 16.3,8 15.5,8C14.7,8 14,8.7 14,9.5C14,10.3 14.7,11 15.5,11C16.3,11 17,10.3 17,9.5Z"
  }));
};

EmoticonCryIcon.displayName = 'EmoticonCryIcon';
EmoticonCryIcon.defaultProps = {
  size: 24
};
var _default = EmoticonCryIcon;
exports["default"] = _default;