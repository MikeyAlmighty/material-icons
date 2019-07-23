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

var GamepadSquareOutlineIcon = function GamepadSquareOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21,6H3C1.9,6 1,6.9 1,8V16C1,17.1 1.9,18 3,18H21C22.1,18 23,17.1 23,16V8C23,6.9 22.1,6 21,6M21,16H3V8H21M6,15H8V13H10V11H8V9H6V11H4V13H6M14.5,12C15.33,12 16,12.67 16,13.5C16,14.33 15.33,15 14.5,15C13.67,15 13,14.33 13,13.5C13,12.67 13.67,12 14.5,12M18.5,9C19.33,9 20,9.67 20,10.5C20,11.33 19.33,12 18.5,12C17.67,12 17,11.33 17,10.5C17,9.67 17.67,9 18.5,9Z"
  }));
};

GamepadSquareOutlineIcon.displayName = 'GamepadSquareOutlineIcon';
GamepadSquareOutlineIcon.defaultProps = {
  size: 24
};
var _default = GamepadSquareOutlineIcon;
exports["default"] = _default;