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

var SeatbeltIcon = function SeatbeltIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C13.11,2 14,2.9 14,4C14,5.11 13.11,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12.39,14.79C14.03,14.79 15.46,14.89 16.64,15.04C16.7,12.32 16.46,9.92 16,9C15.87,8.73 15.69,8.5 15.5,8.3L7.43,15.22C8.79,15 10.5,14.79 12.39,14.79M7.46,17C7.59,18.74 7.85,20.5 8.27,22H10.34C10.05,21.12 9.84,20.09 9.68,19C9.68,19 12,18.56 14.32,19C14.16,20.09 13.95,21.12 13.66,22H15.73C16.17,20.45 16.43,18.61 16.56,16.79C15.41,16.65 14,16.54 12.39,16.54C10.46,16.54 8.78,16.75 7.46,17M12,7C12,7 9,7 8,9C7.66,9.68 7.44,11.15 7.37,12.96L13.92,7.34C12.93,7 12,7 12,7M18.57,5.67L17.43,4.34L13.92,7.35C14.47,7.54 15.05,7.84 15.5,8.3L18.57,5.67M20.67,15.83C20.58,15.8 19.14,15.33 16.64,15.04C16.63,15.61 16.6,16.2 16.56,16.79C18.81,17.07 20.1,17.5 20.12,17.5L20.67,15.83M7.37,12.96L3.43,16.34L4.32,17.82C4.34,17.81 5.5,17.36 7.46,17C7.35,15.59 7.32,14.2 7.37,12.96Z"
  }));
};

SeatbeltIcon.displayName = 'SeatbeltIcon';
SeatbeltIcon.defaultProps = {
  size: 24
};
var _default = SeatbeltIcon;
exports["default"] = _default;