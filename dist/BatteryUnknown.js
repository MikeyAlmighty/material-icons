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

var BatteryUnknownIcon = function BatteryUnknownIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15.07,12.25L14.17,13.17C13.63,13.71 13.25,14.18 13.09,15H11.05C11.16,14.1 11.56,13.28 12.17,12.67L13.41,11.41C13.78,11.05 14,10.55 14,10C14,8.89 13.1,8 12,8C10.9,8 10,8.9 10,10H8C8,7.79 9.79,6 12,6C14.21,6 16,7.79 16,10C16,10.88 15.64,11.68 15.07,12.25M13,19H11V17H13M16.67,4H15V2H9V4H7.33C6.6,4 6,4.6 6,5.33V20.66C6,21.4 6.6,22 7.33,22H16.67C17.4,22 18,21.4 18,20.66V5.33C18,4.59 17.4,4 16.67,4Z"
  }));
};

BatteryUnknownIcon.displayName = 'BatteryUnknownIcon';
BatteryUnknownIcon.defaultProps = {
  size: 24
};
var _default = BatteryUnknownIcon;
exports["default"] = _default;