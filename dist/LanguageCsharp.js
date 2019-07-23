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

var LanguageCsharpIcon = function LanguageCsharpIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11.5,15.97L11.91,18.41C11.65,18.55 11.23,18.68 10.67,18.8C10.1,18.93 9.43,19 8.66,19C6.45,18.96 4.79,18.3 3.68,17.04C2.56,15.77 2,14.16 2,12.21C2.05,9.9 2.72,8.13 4,6.89C5.32,5.64 6.96,5 8.94,5C9.69,5 10.34,5.07 10.88,5.19C11.42,5.31 11.82,5.44 12.08,5.59L11.5,8.08L10.44,7.74C10.04,7.64 9.58,7.59 9.05,7.59C7.89,7.58 6.93,7.95 6.18,8.69C5.42,9.42 5.03,10.54 5,12.03C5,13.39 5.37,14.45 6.08,15.23C6.79,16 7.79,16.4 9.07,16.41L10.4,16.29C10.83,16.21 11.19,16.1 11.5,15.97M13.89,19L14.5,15H13L13.34,13H14.84L15.16,11H13.66L14,9H15.5L16.11,5H18.11L17.5,9H18.5L19.11,5H21.11L20.5,9H22L21.66,11H20.16L19.84,13H21.34L21,15H19.5L18.89,19H16.89L17.5,15H16.5L15.89,19H13.89M16.84,13H17.84L18.16,11H17.16L16.84,13Z"
  }));
};

LanguageCsharpIcon.displayName = 'LanguageCsharpIcon';
LanguageCsharpIcon.defaultProps = {
  size: 24
};
var _default = LanguageCsharpIcon;
exports["default"] = _default;