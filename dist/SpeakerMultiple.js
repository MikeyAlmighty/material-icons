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

var SpeakerMultipleIcon = function SpeakerMultipleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14,10C12.34,10 11,11.34 11,13C11,14.66 12.34,16 14,16C15.66,16 17,14.66 17,13C17,11.34 15.66,10 14,10M14,18C11.24,18 9,15.76 9,13C9,10.24 11.24,8 14,8C16.76,8 19,10.24 19,13C19,15.76 16.76,18 14,18M14,2C15.1,2 16,2.9 16,4C16,5.1 15.1,6 14,6C12.9,6 12,5.1 12,4C12,2.9 12.9,2 14,2M19,0H9C7.9,0 7,0.9 7,2V18C7,19.1 7.9,20 9,20H19C20.1,20 21,19.1 21,18V2C21,0.9 20.1,0 19,0M5,22H17V24H5C3.9,24 3,23.1 3,22V4H5"
  }));
};

SpeakerMultipleIcon.displayName = 'SpeakerMultipleIcon';
SpeakerMultipleIcon.defaultProps = {
  size: 24
};
var _default = SpeakerMultipleIcon;
exports["default"] = _default;