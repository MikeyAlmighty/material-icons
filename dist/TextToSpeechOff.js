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

var TextToSpeechOffIcon = function TextToSpeechOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,5.27L3.28,4L20,20.72L18.73,22L13.38,16.65C12.55,18.35 10.93,19.59 9,19.92V22H7V19.92C4.16,19.44 2,16.97 2,14H4C4,16.21 5.79,18 8,18C9.82,18 11.36,16.78 11.84,15.11L10,13.27V14C10,15.1 9.1,16 8,16C6.9,16 6,15.1 6,14V9.27L2,5.27M21.41,9.41L17.17,13.66L18.18,10H14C12.9,10 12,9.1 12,8V4C12,2.9 12.9,2 14,2H20C21.1,2 22,2.9 22,4V8C22,8.55 21.78,9.05 21.41,9.41Z"
  }));
};

TextToSpeechOffIcon.displayName = 'TextToSpeechOffIcon';
TextToSpeechOffIcon.defaultProps = {
  size: 24
};
var _default = TextToSpeechOffIcon;
exports["default"] = _default;