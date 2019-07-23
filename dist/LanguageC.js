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

var LanguageCIcon = function LanguageCIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15.45,15.97L15.87,18.41C15.61,18.55 15.19,18.68 14.63,18.8C14.06,18.93 13.39,19 12.62,19C10.41,18.96 8.75,18.3 7.64,17.04C6.5,15.77 5.96,14.16 5.96,12.21C6,9.9 6.68,8.13 8,6.89C9.28,5.64 10.92,5 12.9,5C13.65,5 14.3,5.07 14.84,5.19C15.38,5.31 15.78,5.44 16.04,5.59L15.44,8.08L14.4,7.74C14,7.64 13.53,7.59 13,7.59C11.85,7.58 10.89,7.95 10.14,8.69C9.38,9.42 9,10.54 8.96,12.03C8.97,13.39 9.33,14.45 10.04,15.23C10.75,16 11.74,16.4 13.03,16.41L14.36,16.29C14.79,16.21 15.15,16.1 15.45,15.97Z"
  }));
};

LanguageCIcon.displayName = 'LanguageCIcon';
LanguageCIcon.defaultProps = {
  size: 24
};
var _default = LanguageCIcon;
exports["default"] = _default;