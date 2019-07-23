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

var NfcVariantOffIcon = function NfcVariantOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M1.25,2.05L21.95,22.75L20.7,24L18.7,22H4C2.9,22 2,21.1 2,20V5.3L0,3.3L1.25,2.05M3.81,2C3.87,2 3.94,2 4,2H20C21.11,2 22,2.89 22,4V20C22,20.06 22,20.13 22,20.19L20,18.2V4H5.8L3.81,2M6,9.3L4,7.3V20H16.7L14.7,18H6V9.3M18,16.2L16,14.2V8H13V10.28C13.6,10.62 14,11.26 14,12C14,12.06 14,12.13 14,12.19L11,9.2V8C11,6.9 11.9,6 13,6H18V16.2M8,16H12.7L8,11.3V16M10,8H9.8L7.8,6H10V8Z"
  }));
};

NfcVariantOffIcon.displayName = 'NfcVariantOffIcon';
NfcVariantOffIcon.defaultProps = {
  size: 24
};
var _default = NfcVariantOffIcon;
exports["default"] = _default;