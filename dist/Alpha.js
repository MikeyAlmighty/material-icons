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

var AlphaIcon = function AlphaIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.08,17.8C17.62,17.93 17.21,18 16.85,18C15.65,18 14.84,17.12 14.43,15.35H14.38C13.39,17.26 12,18.21 10.25,18.21C8.94,18.21 7.89,17.72 7.1,16.73C6.31,15.74 5.92,14.5 5.92,13C5.92,11.25 6.37,9.85 7.26,8.76C8.15,7.67 9.36,7.12 10.89,7.12C11.71,7.12 12.45,7.35 13.09,7.8C13.73,8.26 14.22,8.9 14.56,9.73H14.6L15.31,7.33H17.87L15.73,12.65C15.97,13.89 16.22,14.74 16.5,15.19C16.74,15.64 17.08,15.87 17.5,15.87C17.74,15.87 17.93,15.83 18.1,15.76L18.08,17.8M13.82,12.56C13.61,11.43 13.27,10.55 12.81,9.95C12.36,9.34 11.81,9.04 11.18,9.04C10.36,9.04 9.7,9.41 9.21,10.14C8.72,10.88 8.5,11.79 8.5,12.86C8.5,13.84 8.69,14.65 9.12,15.31C9.54,15.97 10.11,16.29 10.82,16.29C11.42,16.29 11.97,16 12.46,15.45C12.96,14.88 13.37,14.05 13.7,12.96L13.82,12.56Z"
  }));
};

AlphaIcon.displayName = 'AlphaIcon';
AlphaIcon.defaultProps = {
  size: 24
};
var _default = AlphaIcon;
exports["default"] = _default;