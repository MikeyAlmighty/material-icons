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

var BoomboxIcon = function BoomboxIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7,5L5,7V8H3C2.45,8 2,8.45 2,9V17C2,17.55 2.45,18 3,18H21C21.55,18 22,17.55 22,17V9C22,8.45 21.55,8 21,8H19V7L17,5H7M7,7H17V8H7V7M11,9H13C13.28,9 13.5,9.22 13.5,9.5C13.5,9.78 13.28,10 13,10H11C10.72,10 10.5,9.78 10.5,9.5C10.5,9.22 10.72,9 11,9M7.5,10.5C9.16,10.5 10.5,11.84 10.5,13.5C10.5,15.16 9.16,16.5 7.5,16.5C5.84,16.5 4.5,15.16 4.5,13.5C4.5,11.84 5.84,10.5 7.5,10.5M16.5,10.5C18.16,10.5 19.5,11.84 19.5,13.5C19.5,15.16 18.16,16.5 16.5,16.5C14.84,16.5 13.5,15.16 13.5,13.5C13.5,11.84 14.84,10.5 16.5,10.5M7.5,12C6.67,12 6,12.67 6,13.5C6,14.33 6.67,15 7.5,15C8.33,15 9,14.33 9,13.5C9,12.67 8.33,12 7.5,12M16.5,12C15.67,12 15,12.67 15,13.5C15,14.33 15.67,15 16.5,15C17.33,15 18,14.33 18,13.5C18,12.67 17.33,12 16.5,12Z"
  }));
};

BoomboxIcon.displayName = 'BoomboxIcon';
BoomboxIcon.defaultProps = {
  size: 24
};
var _default = BoomboxIcon;
exports["default"] = _default;