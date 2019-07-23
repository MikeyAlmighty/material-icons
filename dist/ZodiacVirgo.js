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

var ZodiacVirgoIcon = function ZodiacVirgoIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.5,19.13C20,17.77 20,15.18 20,14C20,11.79 18.21,10 16,10C15.3,10 14.6,10.2 14,10.56V6C14,4.34 12.66,3 11,3C10.25,3 9.55,3.29 9,3.78C7.86,2.76 6.14,2.76 5,3.78C4.45,3.28 3.74,3 3,3V5C3.55,5 4,5.45 4,6V16H6V6C6,5.45 6.45,5 7,5C7.55,5 8,5.45 8,6V16H10V6C10,5.45 10.45,5 11,5C11.55,5 12,5.45 12,6V14C12,15.18 12,17.77 13.5,19.13C12.72,19.54 11.88,19.84 11,20V22C12.29,22 14.84,20.74 16,20.13C17.16,20.74 19.71,22 21,22V20C20.12,19.84 19.28,19.54 18.5,19.13M16,12C17.1,12 18,12.9 18,14C18,16.92 17.46,18 16,18C14.54,18 14,16.92 14,14C14,12.9 14.9,12 16,12Z"
  }));
};

ZodiacVirgoIcon.displayName = 'ZodiacVirgoIcon';
ZodiacVirgoIcon.defaultProps = {
  size: 24
};
var _default = ZodiacVirgoIcon;
exports["default"] = _default;