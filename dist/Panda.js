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

var PandaIcon = function PandaIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,3C13.74,3 15.36,3.5 16.74,4.35C17.38,3.53 18.38,3 19.5,3C21.43,3 23,4.57 23,6.5C23,8 22.05,9.28 20.72,9.78C20.9,10.5 21,11.23 21,12C21,16.97 16.97,21 12,21C7.03,21 3,16.97 3,12C3,11.23 3.1,10.5 3.28,9.78C1.95,9.28 1,8 1,6.5C1,4.57 2.57,3 4.5,3C5.62,3 6.62,3.53 7.26,4.35C8.64,3.5 10.26,3 12,3M12,5C8.13,5 5,8.13 5,12C5,15.87 8.13,19 12,19C15.87,19 19,15.87 19,12C19,8.13 15.87,5 12,5M16.19,10.3C16.55,11.63 16.08,12.91 15.15,13.16C14.21,13.42 13.17,12.54 12.81,11.2C12.45,9.87 12.92,8.59 13.85,8.34C14.79,8.09 15.83,8.96 16.19,10.3M7.81,10.3C8.17,8.96 9.21,8.09 10.15,8.34C11.08,8.59 11.55,9.87 11.19,11.2C10.83,12.54 9.79,13.42 8.85,13.16C7.92,12.91 7.45,11.63 7.81,10.3M12,14C12.6,14 13.13,14.19 13.5,14.5L12.5,15.5C12.5,15.92 12.84,16.25 13.25,16.25C13.66,16.25 14,15.91 14,15.5C14,15.22 14.22,15 14.5,15C14.78,15 15,15.22 15,15.5C15,16.47 14.22,17.25 13.25,17.25C12.76,17.25 12.32,17.05 12,16.72C11.68,17.05 11.24,17.25 10.75,17.25C9.78,17.25 9,16.47 9,15.5C9,15.22 9.22,15 9.5,15C9.78,15 10,15.22 10,15.5C10,15.91 10.34,16.25 10.75,16.25C11.16,16.25 11.5,15.91 11.5,15.5L10.5,14.5C10.87,14.19 11.4,14 12,14Z"
  }));
};

PandaIcon.displayName = 'PandaIcon';
PandaIcon.defaultProps = {
  size: 24
};
var _default = PandaIcon;
exports["default"] = _default;