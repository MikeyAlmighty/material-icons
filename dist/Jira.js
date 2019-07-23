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

var JiraIcon = function JiraIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11.53,2C11.53,4.4 13.5,6.35 15.88,6.35H17.66V8.05C17.66,10.45 19.6,12.39 22,12.4V2.84C22,2.38 21.62,2 21.16,2H11.53M6.77,6.8C6.78,9.19 8.72,11.13 11.11,11.14H12.91V12.86C12.92,15.25 14.86,17.19 17.25,17.2V7.63C17.24,7.17 16.88,6.81 16.42,6.8H6.77M2,11.6C2,14 3.95,15.94 6.35,15.94H8.13V17.66C8.14,20.05 10.08,22 12.47,22V12.43C12.47,11.97 12.09,11.59 11.63,11.59L2,11.6Z"
  }));
};

JiraIcon.displayName = 'JiraIcon';
JiraIcon.defaultProps = {
  size: 24
};
var _default = JiraIcon;
exports["default"] = _default;