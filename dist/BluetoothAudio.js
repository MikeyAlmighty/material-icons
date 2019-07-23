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

var BluetoothAudioIcon = function BluetoothAudioIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12.88,16.29L11,18.17V14.41M11,5.83L12.88,7.71L11,9.58M15.71,7.71L10,2H9V9.58L4.41,5L3,6.41L8.59,12L3,17.58L4.41,19L9,14.41V22H10L15.71,16.29L11.41,12M19.53,6.71L18.26,8C18.89,9.18 19.25,10.55 19.25,12C19.25,13.45 18.89,14.82 18.26,16L19.46,17.22C20.43,15.68 21,13.87 21,11.91C21,10 20.46,8.23 19.53,6.71M14.24,12L16.56,14.33C16.84,13.6 17,12.82 17,12C17,11.18 16.84,10.4 16.57,9.68L14.24,12Z"
  }));
};

BluetoothAudioIcon.displayName = 'BluetoothAudioIcon';
BluetoothAudioIcon.defaultProps = {
  size: 24
};
var _default = BluetoothAudioIcon;
exports["default"] = _default;