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

var SpeakerWirelessIcon = function SpeakerWirelessIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.07,19.07L18.66,17.66C20.11,16.22 21,14.21 21,12C21,9.78 20.11,7.78 18.66,6.34L20.07,4.93C21.88,6.74 23,9.24 23,12C23,14.76 21.88,17.26 20.07,19.07M17.24,16.24L15.83,14.83C16.55,14.11 17,13.11 17,12C17,10.89 16.55,9.89 15.83,9.17L17.24,7.76C18.33,8.85 19,10.35 19,12C19,13.65 18.33,15.15 17.24,16.24M4,3H12C13.1,3 14,3.9 14,5V19C14,20.1 13.1,21 12,21H4C2.9,21 2,20.1 2,19V5C2,3.9 2.9,3 4,3M8,5C6.9,5 6,5.9 6,7C6,8.1 6.9,9 8,9C9.1,9 10,8.1 10,7C10,5.9 9.1,5 8,5M8,11C5.79,11 4,12.79 4,15C4,17.21 5.79,19 8,19C10.21,19 12,17.21 12,15C12,12.79 10.21,11 8,11M8,13C9.1,13 10,13.9 10,15C10,16.1 9.1,17 8,17C6.9,17 6,16.1 6,15C6,13.9 6.9,13 8,13Z"
  }));
};

SpeakerWirelessIcon.displayName = 'SpeakerWirelessIcon';
SpeakerWirelessIcon.defaultProps = {
  size: 24
};
var _default = SpeakerWirelessIcon;
exports["default"] = _default;