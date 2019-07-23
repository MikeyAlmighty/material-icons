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

var BarleyOffIcon = function BarleyOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11.96,1.21C11.3,2.76 10.64,4.31 10.65,5.82C10.66,6.42 10.77,7 10.94,7.62C10.86,7.46 10.77,7.31 10.67,7.17C9.83,6 8.17,5 6.5,4C6.5,4.8 6.5,5.59 6.68,6.36L13,12.68V10.7C14.5,9.8 15.92,8.88 16.67,7.83C17.5,6.67 17.5,5.33 17.5,4C15.83,5 14.17,6 13.33,7.17C13.23,7.31 13.15,7.45 13.07,7.59C13.25,6.96 13.36,6.32 13.35,5.69C13.34,4.18 12.65,2.69 11.96,1.21M3.28,5.5L2,6.77L6.64,11.41C6.75,12 6.95,12.55 7.33,13.08C8.08,14.13 9.5,15.05 11,15.95V18.23L10.67,17.67C9.83,16.5 8.17,15.5 6.5,14.5C6.5,15.83 6.5,17.17 7.33,18.33C8.08,19.38 9.5,20.3 11,21.2V23H13V21.2C13.74,20.76 14.45,20.31 15.07,19.84L18.73,23.5L20,22.22C14,16.23 9.1,11.32 3.28,5.5M17.5,9.25C15.83,10.25 14.17,11.25 13.33,12.42L13.12,12.79L15,14.66C15.67,14.16 16.27,13.64 16.67,13.08C17.5,11.92 17.5,10.58 17.5,9.25M17.5,14.5C16.93,14.84 16.38,15.18 15.85,15.53L17.29,16.97C17.5,16.17 17.5,15.33 17.5,14.5Z"
  }));
};

BarleyOffIcon.displayName = 'BarleyOffIcon';
BarleyOffIcon.defaultProps = {
  size: 24
};
var _default = BarleyOffIcon;
exports["default"] = _default;