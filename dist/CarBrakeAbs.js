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

var CarBrakeAbsIcon = function CarBrakeAbsIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M24,12C24,15.31 22.66,18.31 20.5,20.5L19.42,19.42C21.32,17.5 22.5,14.9 22.5,12C22.5,9.11 21.32,6.5 19.42,4.58L20.5,3.5C22.66,5.69 24,8.69 24,12M20,9.6V8H16.8C15.92,8 15.2,8.72 15.2,9.6V11.2C15.2,12.08 15.92,12.8 16.8,12.8H18.4V14.4H15.2V16H18.4C19.28,16 20,15.28 20,14.4V12.8C20,11.92 19.28,11.2 18.4,11.2H16.8V9.6H20M8.42,6C9.47,5.37 10.69,5 12,5C13.31,5 14.53,5.37 15.58,6H18.69C17.05,4.16 14.66,3 12,3C9.34,3 6.95,4.16 5.31,6H8.42M13.2,12C13.84,12 14.4,12.56 14.4,13.2V14.4C14.4,15.28 13.68,16 12.8,16H9.6V8H12.8C13.68,8 14.4,8.72 14.4,9.6V10.8C14.4,11.44 13.84,12 13.2,12M12.8,12.8H11.2V14.4H12.8V12.8M12.8,9.6H11.2V11.2H12.8V9.6M4.58,4.58L3.5,3.5C1.34,5.69 0,8.69 0,12C0,15.31 1.34,18.31 3.5,20.5L4.58,19.42C2.68,17.5 1.5,14.9 1.5,12C1.5,9.11 2.68,6.5 4.58,4.58M7.2,16V12.8H5.6V16H4V9.6C4,8.72 4.72,8 5.6,8H7.2C8.08,8 8.8,8.72 8.8,9.6V16H7.2M7.2,11.2V9.6H5.6V11.2H7.2M15.58,18C14.53,18.63 13.31,19 12,19C10.69,19 9.47,18.63 8.42,18H5.31C6.95,19.84 9.34,21 12,21C14.66,21 17.05,19.84 18.69,18H15.58Z"
  }));
};

CarBrakeAbsIcon.displayName = 'CarBrakeAbsIcon';
CarBrakeAbsIcon.defaultProps = {
  size: 24
};
var _default = CarBrakeAbsIcon;
exports["default"] = _default;