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

var EtsyIcon = function EtsyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6.72,20.78C8.23,20.71 10.07,20.78 11.87,20.78C13.72,20.78 15.62,20.66 17.12,20.78C17.72,20.83 18.28,21.19 18.77,20.87C19.16,20.38 18.87,19.71 18.96,19.05C19.12,17.78 20.28,16.27 18.59,15.95C17.87,16.61 18.35,17.23 17.95,18.05C17.45,19.03 15.68,19.37 14,19.5C12.54,19.62 10,19.76 9.5,18.77C9.04,17.94 9.29,16.65 9.29,15.58C9.29,14.38 9.16,13.22 9.5,12.3C11.32,12.43 13.7,11.69 15,12.5C15.87,13 15.37,14.06 16.38,14.4C17.07,14.21 16.7,13.32 16.66,12.5C16.63,11.94 16.63,11.19 16.66,10.57C16.69,9.73 17,8.76 16.1,8.74C15.39,9.3 15.93,10.23 15.18,10.75C14.95,10.92 14.43,11 14.08,11C12.7,11.17 10.54,11.05 9.38,10.84C9.23,9.16 9.24,6.87 9.38,5.19C10,4.57 11.45,4.54 12.42,4.55C14.13,4.55 16.79,4.7 17.3,5.55C17.58,6 17.36,7 17.85,7.1C18.85,7.33 18.36,5.55 18.41,4.73C18.44,4.11 18.71,3.72 18.59,3.27C18.27,2.83 17.79,3.05 17.5,3.09C14.35,3.5 9.6,3.27 6.26,3.27C5.86,3.27 5.16,3.07 4.88,3.54C4.68,4.6 6.12,4.16 6.62,4.73C6.79,4.91 7.03,5.73 7.08,6.28C7.23,7.74 7.08,9.97 7.08,12.12C7.08,14.38 7.26,16.67 7.08,18.05C7,18.53 6.73,19.3 6.62,19.41C6,20.04 4.34,19.35 4.5,20.69C5.09,21.08 5.93,20.82 6.72,20.78Z"
  }));
};

EtsyIcon.displayName = 'EtsyIcon';
EtsyIcon.defaultProps = {
  size: 24
};
var _default = EtsyIcon;
exports["default"] = _default;