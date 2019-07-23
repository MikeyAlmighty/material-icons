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

var YoutubeGamingIcon = function YoutubeGamingIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,3.54C5.81,3.54 5.63,3.62 5.46,3.71L0.55,6.5C0.21,6.7 0,7.06 0,7.45V13.68C0,14.07 0.21,14.43 0.55,14.63L11.46,20.83C11.63,20.92 11.81,21 12,21C12.19,21 12.37,20.92 12.54,20.83L23.45,14.63C23.79,14.44 24,14.08 24,13.69V7.45C24,7.06 23.79,6.7 23.45,6.5L18.54,3.71C18.37,3.62 18.19,3.54 18,3.54C17.81,3.54 17.63,3.62 17.46,3.71L12.54,6.5C12.21,6.7 11.8,6.7 11.46,6.5L6.54,3.71C6.37,3.62 6.19,3.54 6,3.54M18.14,4.09L23.46,7.09L18.14,10.23V4.09Z"
  }));
};

YoutubeGamingIcon.displayName = 'YoutubeGamingIcon';
YoutubeGamingIcon.defaultProps = {
  size: 24
};
var _default = YoutubeGamingIcon;
exports["default"] = _default;