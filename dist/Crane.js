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

var CraneIcon = function CraneIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,6V5C20,4.45 19.55,4 19,4H9V3H6V4H5V6H6V15H5V13H3V15H2V17H3V21H5V17H10V21H12V19.92L12,17H13V15H12V13H10V15H9V6H17V10.62C16.53,10.79 16.19,11.23 16.19,11.76C16.19,12.2 16.43,12.6 16.8,12.82V14H17.42C17.76,14 18.03,14.28 18.03,14.62C18.03,14.96 17.76,15.24 17.42,15.24C17.2,15.24 17,15.12 16.89,14.93C16.71,14.64 16.34,14.54 16.05,14.71C15.75,14.87 15.65,15.25 15.82,15.55C16.15,16.11 16.76,16.47 17.42,16.47C18.43,16.47 19.26,15.64 19.26,14.62C19.26,13.84 18.76,13.14 18.03,12.88V12.82C18.41,12.6 18.65,12.2 18.65,11.76C18.65,11.3 18.38,10.91 18,10.7V6H20M8,13.66L7,14.66V13.24L8,12.24V13.66M8,10.71L7,11.71V10.29L8,9.29V10.71M7,8.71V7.29L8,6.29V7.71L7,8.71Z"
  }));
};

CraneIcon.displayName = 'CraneIcon';
CraneIcon.defaultProps = {
  size: 24
};
var _default = CraneIcon;
exports["default"] = _default;