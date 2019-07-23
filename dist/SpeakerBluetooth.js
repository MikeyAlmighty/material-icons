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

var SpeakerBluetoothIcon = function SpeakerBluetoothIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4,3C2.9,3 2,3.9 2,5V19C2,20.1 2.9,21 4,21H12C13.1,21 14,20.1 14,19V5C14,3.9 13.1,3 12,3H4M8,5C9.1,5 10,5.9 10,7C10,8.1 9.1,9 8,9C6.9,9 6,8.1 6,7C6,5.9 6.9,5 8,5M19,7V10.79L16.71,8.5L16,9.21L18.79,12L16,14.79L16.71,15.5L19,13.21V17H19.5L22.35,14.14L20.21,12L22.35,9.85L19.5,7H19M20,8.91L20.94,9.85L20,10.79V8.91M8,11C10.21,11 12,12.79 12,15C12,17.21 10.21,19 8,19C5.79,19 4,17.21 4,15C4,12.79 5.79,11 8,11M8,13C6.9,13 6,13.9 6,15C6,16.1 6.9,17 8,17C9.1,17 10,16.1 10,15C10,13.9 9.1,13 8,13M20,13.21L20.94,14.14L20,15.08V13.21Z"
  }));
};

SpeakerBluetoothIcon.displayName = 'SpeakerBluetoothIcon';
SpeakerBluetoothIcon.defaultProps = {
  size: 24
};
var _default = SpeakerBluetoothIcon;
exports["default"] = _default;