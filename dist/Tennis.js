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

var TennisIcon = function TennisIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18,15C20.21,15 22,16.79 22,19C22,21.21 20.21,23 18,23C15.79,23 14,21.21 14,19C14,16.79 15.79,15 18,15M18,17C16.9,17 16,17.9 16,19C16,20.1 16.9,21 18,21C19.1,21 20,20.1 20,19C20,17.9 19.1,17 18,17M6.05,14.54C6.05,14.54 7.46,13.12 7.47,10.3C7.11,8.11 7.97,5.54 9.94,3.58C12.87,0.65 17.14,0.17 19.5,2.5C21.83,4.86 21.35,9.13 18.42,12.06C16.46,14.03 13.89,14.89 11.7,14.53C8.88,14.54 7.46,15.95 7.46,15.95L3.22,20.19L1.81,18.78L6.05,14.54M18.07,3.93C16.5,2.37 13.5,2.84 11.35,5C9.21,7.14 8.73,10.15 10.29,11.71C11.86,13.27 14.86,12.79 17,10.65C19.16,8.5 19.63,5.5 18.07,3.93Z"
  }));
};

TennisIcon.displayName = 'TennisIcon';
TennisIcon.defaultProps = {
  size: 24
};
var _default = TennisIcon;
exports["default"] = _default;