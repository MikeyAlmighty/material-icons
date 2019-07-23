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

var FacebookWorkplaceIcon = function FacebookWorkplaceIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19.69,16.12C19.42,16.43 18.95,16.92 18.19,16.92C17.13,16.92 16.78,16.15 16.46,15.34L14.86,11.41L13.26,15.34C13,16 12.7,16.92 11.53,16.92C10.36,16.92 10.07,16 9.79,15.34L7.11,8.72H9.37L11.53,14.17L13.14,10.2C13.39,9.57 13.69,8.62 14.86,8.62C16,8.62 16.32,9.57 16.58,10.2L18.33,14.5C19.22,13.14 19.6,11.5 19.38,9.89C19.16,8.28 18.37,6.8 17.14,5.73C15.92,4.66 14.34,4.06 12.72,4.06C11.03,4.05 9.39,4.58 8,5.56C6.66,6.55 5.64,7.94 5.12,9.54C4.6,11.14 4.6,12.87 5.12,14.47C5.64,16.07 6.66,17.46 8.03,18.44C9.4,19.43 11.04,19.95 12.72,19.94C13.45,19.94 14.17,19.84 14.87,19.64V21.75C14.16,21.91 13.44,22 12.72,22C10.61,22 8.54,21.34 6.82,20.1C5.1,18.86 3.82,17.11 3.17,15.1C2.5,13.09 2.5,10.92 3.16,8.9C3.82,6.89 5.1,5.14 6.82,3.9C8.53,2.66 10.6,2 12.72,2C17.56,2 21.5,5.94 21.5,10.79C21.5,12.71 20.86,14.59 19.69,16.12V16.12Z"
  }));
};

FacebookWorkplaceIcon.displayName = 'FacebookWorkplaceIcon';
FacebookWorkplaceIcon.defaultProps = {
  size: 24
};
var _default = FacebookWorkplaceIcon;
exports["default"] = _default;