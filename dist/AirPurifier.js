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

var AirPurifierIcon = function AirPurifierIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11,9C13.21,9 15,10.79 15,13C15,15.21 13.21,17 11,17C8.79,17 7,15.21 7,13C7,10.79 8.79,9 11,9M11,11C9.9,11 9,11.9 9,13C9,14.1 9.9,15 11,15C12.1,15 13,14.1 13,13C13,11.9 12.1,11 11,11M7,4H14C16.21,4 18,5.79 18,8V9H16V8C16,6.9 15.1,6 14,6H7C5.9,6 5,6.9 5,8V20H16V18H18V22H3V8C3,5.79 4.79,4 7,4M16,11C18.5,11 18.5,9 21,9V11C18.5,11 18.5,13 16,13V11M16,15C18.5,15 18.5,13 21,13V15C18.5,15 18.5,17 16,17V15Z"
  }));
};

AirPurifierIcon.displayName = 'AirPurifierIcon';
AirPurifierIcon.defaultProps = {
  size: 24
};
var _default = AirPurifierIcon;
exports["default"] = _default;