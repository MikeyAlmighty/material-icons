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

var CartOffIcon = function CartOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22.73,22.73L1.27,1.27L0,2.54L4.39,6.93L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15C5,16.1 5.9,17 7,17H14.46L15.84,18.38C15.34,18.74 15,19.33 15,20C15,21.1 15.9,22 17,22C17.67,22 18.26,21.67 18.62,21.16L21.46,24L22.73,22.73M7.42,15C7.28,15 7.17,14.89 7.17,14.75L7.2,14.63L8.1,13H10.46L12.46,15H7.42M15.55,13C16.3,13 16.96,12.59 17.3,11.97L20.88,5.5C20.96,5.34 21,5.17 21,5C21,4.45 20.55,4 20,4H6.54L15.55,13M7,18C5.9,18 5,18.9 5,20C5,21.1 5.9,22 7,22C8.1,22 9,21.1 9,20C9,18.9 8.1,18 7,18Z"
  }));
};

CartOffIcon.displayName = 'CartOffIcon';
CartOffIcon.defaultProps = {
  size: 24
};
var _default = CartOffIcon;
exports["default"] = _default;