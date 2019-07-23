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

var BatteryBluetoothVariantIcon = function BatteryBluetoothVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9,2V4H7.33C6.6,4 6,4.6 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67C17.4,22 18,21.4 18,20.67V5.33C18,4.6 17.4,4 16.67,4H15V2H9M11.83,8H12.33L15.18,10.85L13.04,13L15.17,15.14L12.33,18H11.83V14.21L9.54,16.5L8.83,15.79L11.62,13L8.83,10.21L9.54,9.5L11.83,11.79V8M12.83,9.91V11.79L13.77,10.85L12.83,9.91M12.83,14.21V16.08L13.77,15.14L12.83,14.21Z"
  }));
};

BatteryBluetoothVariantIcon.displayName = 'BatteryBluetoothVariantIcon';
BatteryBluetoothVariantIcon.defaultProps = {
  size: 24
};
var _default = BatteryBluetoothVariantIcon;
exports["default"] = _default;