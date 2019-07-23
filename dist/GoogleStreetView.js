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

var GoogleStreetViewIcon = function GoogleStreetViewIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11.95,9.27C13.96,9.27 15.59,7.64 15.59,5.63C15.59,3.63 13.96,2 11.95,2C9.94,2 8.32,3.63 8.32,5.63C8.32,7.64 9.94,9.27 11.95,9.27M9.36,12.97C9.36,12.97 8.27,15.94 7.96,16.5C7.85,16.71 7.87,16.77 7.6,16.77C7.33,16.77 6.91,16.5 6.91,16.5C6.91,16.5 6.71,16.37 6.79,16.14C7.03,15.4 8.12,11.08 8.35,10.25C8.6,9.36 9.28,9.39 9.28,9.39H9.93L12.03,13.04L14.14,9.39H14.92C14.92,9.39 15.23,9.43 15.46,9.7C15.7,9.97 15.75,10.44 15.75,10.44L17.14,15.84C17.14,15.84 17.24,16.22 17.21,16.33C17.17,16.5 17.08,16.5 17.08,16.5C17.08,16.5 16.69,16.62 16.47,16.69C16.07,16.82 16,16.44 16,16.44L14.7,13.04L14.55,22H12.6L12.27,16.89C12.27,16.89 12.21,16.76 12.03,16.76C11.86,16.76 11.8,16.89 11.8,16.89L11.45,22H9.5L9.37,12.97H9.36Z"
  }));
};

GoogleStreetViewIcon.displayName = 'GoogleStreetViewIcon';
GoogleStreetViewIcon.defaultProps = {
  size: 24
};
var _default = GoogleStreetViewIcon;
exports["default"] = _default;