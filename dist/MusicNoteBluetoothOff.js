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

var MusicNoteBluetoothOffIcon = function MusicNoteBluetoothOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10,3V8.68L13,11.68V6H17V3H10M3.28,4.5L2,5.77L8.26,12.03C5.89,12.15 4,14.1 4,16.5C4,19 6,21 8.5,21C10.9,21 12.85,19.11 12.97,16.74L17.68,21.45L18.96,20.18L13,14.22L10,11.22L3.28,4.5M20,7V10.79L17.71,8.5L17,9.21L19.79,12L17,14.79L17.71,15.5L20,13.21V17H20.5L23.35,14.15L21.21,12L23.36,9.85L20.5,7H20M21,8.91L21.94,9.85L21,10.79V8.91M21,13.21L21.94,14.15L21,15.09V13.21Z"
  }));
};

MusicNoteBluetoothOffIcon.displayName = 'MusicNoteBluetoothOffIcon';
MusicNoteBluetoothOffIcon.defaultProps = {
  size: 24
};
var _default = MusicNoteBluetoothOffIcon;
exports["default"] = _default;