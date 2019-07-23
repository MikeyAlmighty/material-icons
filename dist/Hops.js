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

var HopsIcon = function HopsIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21,12C21,12 12.5,10 12.5,2C12.5,2 21,2 21,12M3,12C3,2 11.5,2 11.5,2C11.5,10 3,12 3,12M12,6.5C12,6.5 13,8.66 15,10.5C14.76,14.16 12,16 12,16C12,16 9.24,14.16 9,10.5C11,8.66 12,6.5 12,6.5M20.75,13.25C20.75,13.25 20,17 18,19C18,19 15.53,17.36 14.33,14.81C15.05,13.58 15.5,12.12 15.75,11.13C17.13,12.18 18.75,13 20.75,13.25M15.5,18.25C14.5,20.25 12,21.75 12,21.75C12,21.75 9.5,20.25 8.5,18.25C8.5,18.25 9.59,17.34 10.35,15.8C10.82,16.35 11.36,16.79 12,17C12.64,16.79 13.18,16.35 13.65,15.8C14.41,17.34 15.5,18.25 15.5,18.25M3.25,13.25C5.25,13 6.87,12.18 8.25,11.13C8.5,12.12 8.95,13.58 9.67,14.81C8.47,17.36 6,19 6,19C4,17 3.25,13.25 3.25,13.25Z"
  }));
};

HopsIcon.displayName = 'HopsIcon';
HopsIcon.defaultProps = {
  size: 24
};
var _default = HopsIcon;
exports["default"] = _default;