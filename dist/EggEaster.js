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

var EggEasterIcon = function EggEasterIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6.89,6.36C8.23,3.91 10,2 12,2C14,2 15.77,3.91 17.11,6.36C16.26,6.57 15.5,7.07 15,7.77C13.79,6.11 11.46,5.75 9.8,6.97C9.5,7.19 9.22,7.46 9,7.77C8.5,7.07 7.74,6.57 6.89,6.36M15,18.06L12,15.06L9,18.06L6,15.06L4.73,16.33C5.75,20.35 9.83,22.77 13.84,21.76C16.5,21.08 18.59,19 19.27,16.33L18,15.06L15,18.06M9,15.94L12,12.94L15,15.94L18,12.94L19.5,14.44C19.37,12.13 18.8,9.86 17.81,7.76C16.65,7.86 15.75,8.83 15.75,10H14.25C14.25,8.76 13.24,7.75 12,7.75C10.76,7.75 9.75,8.76 9.75,10H8.25C8.25,8.83 7.35,7.86 6.19,7.76C5.2,9.86 4.63,12.13 4.5,14.44L6,12.94L9,15.94Z"
  }));
};

EggEasterIcon.displayName = 'EggEasterIcon';
EggEasterIcon.defaultProps = {
  size: 24
};
var _default = EggEasterIcon;
exports["default"] = _default;