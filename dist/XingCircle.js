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

var XingCircleIcon = function XingCircleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M15.85,6H17.74C17.86,6 17.94,6.04 18,6.12C18.04,6.2 18.04,6.3 18,6.41L13.84,13.76L16.5,18.59C16.53,18.69 16.53,18.8 16.5,18.88C16.43,18.96 16.35,19 16.24,19H14.36C14.07,19 13.93,18.81 13.84,18.64L11.17,13.76C11.31,13.5 15.35,6.36 15.35,6.36C15.45,6.18 15.57,6 15.85,6M7.5,8.57H9.39C9.67,8.57 9.81,8.75 9.9,8.92L11.19,11.17C11.12,11.3 9.17,14.75 9.17,14.75C9.07,14.92 8.94,15.11 8.66,15.11H6.78C6.67,15.11 6.59,15.06 6.54,15C6.5,14.9 6.5,14.8 6.54,14.69L8.53,11.17L7.27,9C7.21,8.87 7.2,8.77 7.25,8.69C7.3,8.61 7.39,8.57 7.5,8.57Z"
  }));
};

XingCircleIcon.displayName = 'XingCircleIcon';
XingCircleIcon.defaultProps = {
  size: 24
};
var _default = XingCircleIcon;
exports["default"] = _default;