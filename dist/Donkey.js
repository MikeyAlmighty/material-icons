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

var DonkeyIcon = function DonkeyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21.34,10.35L21.27,10.28L21.18,10.19L18,7V6C18,5.72 17.78,5.5 17.5,5.5C17.36,5.5 17.22,5.56 17.13,5.66L13.46,9H7C6.32,9 5.69,9.35 5.32,9.92L2.62,12.59C2.29,13.04 2.39,13.66 2.84,14C3.18,14.24 3.65,14.25 4,14L5,13.07V19H8V15H13V19H16V13.83C16,13.3 16.21,12.79 16.59,12.42L18,11L20,12V12C20.15,12.08 20.32,12.13 20.5,12.13C21.1,12.11 21.59,11.61 21.58,11C21.57,10.76 21.5,10.53 21.34,10.35Z"
  }));
};

DonkeyIcon.displayName = 'DonkeyIcon';
DonkeyIcon.defaultProps = {
  size: 24
};
var _default = DonkeyIcon;
exports["default"] = _default;