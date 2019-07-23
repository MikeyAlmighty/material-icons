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

var BatteryChargingWireless80Icon = function BatteryChargingWireless80Icon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.07,4.93L18.66,6.34C21.79,9.46 21.79,14.53 18.66,17.66L20.07,19.07C23.97,15.17 23.97,8.84 20.07,4.93M17.24,7.76L15.83,9.17C17.39,10.73 17.39,13.26 15.83,14.83L17.24,16.24C19.58,13.9 19.58,10.1 17.24,7.76M13,4H11V2H5V4H3C2.45,4 2,4.45 2,5V21C2,21.55 2.45,22 3,22H13C13.55,22 14,21.55 14,21V5C14,4.45 13.55,4 13,4M12,9H4V6H12V9Z"
  }));
};

BatteryChargingWireless80Icon.displayName = 'BatteryChargingWireless80Icon';
BatteryChargingWireless80Icon.defaultProps = {
  size: 24
};
var _default = BatteryChargingWireless80Icon;
exports["default"] = _default;