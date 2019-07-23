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

var CurrencyBdtIcon = function CurrencyBdtIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.09,10.5V9H9.59V4.5C9.59,3.67 8.92,3 8.09,3C7.26,3 6.59,3.67 6.59,4.5C6.59,5.33 7.26,6 8.09,6V9H5.09V10.5H8.09V16.7C8.09,19.06 10,20.97 12.34,21C14.68,20.96 16.54,19.04 16.5,16.7C16.5,15.11 15.75,13.61 14.5,12.62C14.28,12.44 14.05,12.28 13.8,12.15C13.58,12.05 13.34,12 13.1,12C12.39,12 11.74,12.39 11.39,13C11.2,13.3 11.1,13.65 11.1,14C11.11,15.1 12,16 13.11,16C13.73,16 14.31,15.69 14.69,15.2C14.9,15.67 15,16.18 15,16.7C15.04,18.2 13.86,19.45 12.34,19.5C10.81,19.5 9.58,18.23 9.59,16.7V10.5H18.09Z"
  }));
};

CurrencyBdtIcon.displayName = 'CurrencyBdtIcon';
CurrencyBdtIcon.defaultProps = {
  size: 24
};
var _default = CurrencyBdtIcon;
exports["default"] = _default;