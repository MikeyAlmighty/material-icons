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

var BugleIcon = function BugleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21,6C21,11 12,11 12,11C12,11 6,11 5,11C4,11 3,10 3,10H2V14H3C3,14 4,13 5,13C5.2,13 5.7,13 6.3,13C5.5,13.5 5,14.2 5,15C5,16.8 7.3,18 10.5,18C13.7,18 16,16.8 16,15C16,14.4 15.7,13.8 15.2,13.3C17.8,13.8 21,15 21,18H22V6H21M10.5,16.7C8.2,16.7 6.4,15.9 6.4,15C6.4,14.1 8.2,13.3 10.5,13.3C12.8,13.3 14.6,14.1 14.6,15C14.6,15.9 12.8,16.7 10.5,16.7Z"
  }));
};

BugleIcon.displayName = 'BugleIcon';
BugleIcon.defaultProps = {
  size: 24
};
var _default = BugleIcon;
exports["default"] = _default;