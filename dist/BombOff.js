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

var BombOffIcon = function BombOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14.5,2.75C12.7,2.75 11.25,4.2 11.25,6H10V7.29C9.31,7.5 8.67,7.81 8.08,8.2L17.79,17.91C18.58,16.76 19,15.39 19,14C19,10.83 16.89,8.15 14,7.29V6H12.75C12.75,5.03 13.53,4.25 14.5,4.25C15.47,4.25 16.25,5.03 16.25,6C16.25,7.24 17.26,8.25 18.5,8.25C19.74,8.25 20.74,7.24 20.74,6V5.25H19.25V6C19.25,6.42 18.91,6.75 18.5,6.75C18.08,6.75 17.75,6.42 17.75,6C17.75,4.2 16.29,2.75 14.5,2.75M3.41,6.36L2,7.77L5.55,11.32C5.2,12.14 5,13.04 5,14C5,17.86 8.13,21 12,21C12.92,21 13.83,20.81 14.68,20.45L18.23,24L19.64,22.59L3.41,6.36Z"
  }));
};

BombOffIcon.displayName = 'BombOffIcon';
BombOffIcon.defaultProps = {
  size: 24
};
var _default = BombOffIcon;
exports["default"] = _default;