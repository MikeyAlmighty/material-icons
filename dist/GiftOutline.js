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

var GiftOutlineIcon = function GiftOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,12V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V12C1.45,12 1,11.55 1,11V8C1,6.9 1.9,6 3,6H6.17C6.06,5.69 6,5.35 6,5C6,3.34 7.34,2 9,2C10,2 10.88,2.5 11.43,3.24V3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2C16.66,2 18,3.34 18,5C18,5.35 17.94,5.69 17.83,6H21C22.1,6 23,6.9 23,8V11C23,11.55 22.55,12 22,12M4,20H11V12H4V20M20,20V12H13V20H20M9,4C8.45,4 8,4.45 8,5C8,5.55 8.45,6 9,6C9.55,6 10,5.55 10,5C10,4.45 9.55,4 9,4M15,4C14.45,4 14,4.45 14,5C14,5.55 14.45,6 15,6C15.55,6 16,5.55 16,5C16,4.45 15.55,4 15,4M3,8V10H11V8H3M13,8V10H21V8H13Z"
  }));
};

GiftOutlineIcon.displayName = 'GiftOutlineIcon';
GiftOutlineIcon.defaultProps = {
  size: 24
};
var _default = GiftOutlineIcon;
exports["default"] = _default;