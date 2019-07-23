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

var GamepadVariantOutlineIcon = function GamepadVariantOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,9H8V11H10V13H8V15H6V13H4V11H6V9M18.5,9C19.33,9 20,9.67 20,10.5C20,11.33 19.33,12 18.5,12C17.67,12 17,11.33 17,10.5C17,9.67 17.67,9 18.5,9M15.5,12C16.33,12 17,12.67 17,13.5C17,14.33 16.33,15 15.5,15C14.67,15 14,14.33 14,13.5C14,12.67 14.67,12 15.5,12M17,5C20.87,5 24,8.13 24,12C24,15.87 20.87,19 17,19C15.04,19 13.27,18.2 12,16.9C10.73,18.2 8.96,19 7,19C3.13,19 0,15.87 0,12C0,8.13 3.13,5 7,5H17M7,7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17C8.64,17 10.09,16.21 11,15H13C13.91,16.21 15.36,17 17,17C19.76,17 22,14.76 22,12C22,9.24 19.76,7 17,7H7Z"
  }));
};

GamepadVariantOutlineIcon.displayName = 'GamepadVariantOutlineIcon';
GamepadVariantOutlineIcon.defaultProps = {
  size: 24
};
var _default = GamepadVariantOutlineIcon;
exports["default"] = _default;