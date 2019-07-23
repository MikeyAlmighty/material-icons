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

var AppleKeyboardCommandIcon = function AppleKeyboardCommandIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,2C8.21,2 10,3.79 10,6V8H14V6C14,3.79 15.79,2 18,2C20.21,2 22,3.79 22,6C22,8.21 20.21,10 18,10H16V14H18C20.21,14 22,15.79 22,18C22,20.21 20.21,22 18,22C15.79,22 14,20.21 14,18V16H10V18C10,20.21 8.21,22 6,22C3.79,22 2,20.21 2,18C2,15.79 3.79,14 6,14H8V10H6C3.79,10 2,8.21 2,6C2,3.79 3.79,2 6,2M16,18C16,19.1 16.9,20 18,20C19.1,20 20,19.1 20,18C20,16.9 19.1,16 18,16H16V18M14,10H10V14H14V10M6,16C4.9,16 4,16.9 4,18C4,19.1 4.9,20 6,20C7.1,20 8,19.1 8,18V16H6M8,6C8,4.9 7.1,4 6,4C4.9,4 4,4.9 4,6C4,7.1 4.9,8 6,8H8V6M18,8C19.1,8 20,7.1 20,6C20,4.9 19.1,4 18,4C16.9,4 16,4.9 16,6V8H18Z"
  }));
};

AppleKeyboardCommandIcon.displayName = 'AppleKeyboardCommandIcon';
AppleKeyboardCommandIcon.defaultProps = {
  size: 24
};
var _default = AppleKeyboardCommandIcon;
exports["default"] = _default;