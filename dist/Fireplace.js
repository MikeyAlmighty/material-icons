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

var FireplaceIcon = function FireplaceIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,22H2V20H22V22M22,6H2V3H22V6M20,7V19H17V11C17,11 14.5,10 12,10C9.5,10 7,11 7,11V19H4V7H20M14.5,14.67H14.47L14.81,15.22L14.87,15.34C15.29,16.35 15,17.5 14.21,18.24C13.5,18.9 12.5,19.07 11.58,18.95C10.71,18.84 9.9,18.29 9.45,17.53C9.3,17.3 9.19,17.03 9.13,16.77L9,16.11C8.96,15.15 9.34,14.14 10.06,13.54C9.73,14.26 9.81,15.16 10.3,15.79L10.36,15.87C10.44,15.94 10.55,15.97 10.64,15.92C10.73,15.89 10.8,15.8 10.8,15.7L10.76,15.56C10.23,14.17 10.68,12.55 11.79,11.63C12.1,11.38 12.5,11.15 12.87,11.05C12.46,11.87 12.61,12.93 13.25,13.57L14.14,14.3L14.5,14.67M13.11,17.44V17.44C13.37,17.2 13.53,16.8 13.5,16.44V16.25C13.38,15.65 12.85,15.46 12.5,15L12.26,14.55C12.13,14.85 12.12,15.13 12.17,15.46C12.23,15.8 12.37,16.09 12.29,16.44C12.2,16.83 11.9,17.22 11.37,17.35C11.67,17.64 12.15,17.87 12.64,17.71L13.11,17.44Z"
  }));
};

FireplaceIcon.displayName = 'FireplaceIcon';
FireplaceIcon.defaultProps = {
  size: 24
};
var _default = FireplaceIcon;
exports["default"] = _default;