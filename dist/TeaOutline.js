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

var TeaOutlineIcon = function TeaOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4,19H20V21H4V19M21.4,3.6C21,3.2 20.6,3 20,3H4V13C4,14.1 4.4,15 5.2,15.8C6,16.6 6.9,17 8,17H14C15.1,17 16,16.6 16.8,15.8C17.6,15 18,14.1 18,13V10H20C20.6,10 21,9.8 21.4,9.4C21.8,9 22,8.6 22,8V5C22,4.5 21.8,4 21.4,3.6M16,5V8L16,10V13C16,13.6 15.8,14 15.4,14.4C15,14.8 14.6,15 14,15H8C7.4,15 7,14.8 6.6,14.4C6.2,14 6,13.5 6,13V5H10V6.4L8.2,7.8C8,7.9 8,8.1 8,8.2V12.5C8,12.8 8.2,13 8.5,13H12.5C12.8,13 13,12.8 13,12.5V8.2C13,8 12.9,7.9 12.8,7.8L11,6.4V5H16M20,8H18V5H20V8Z"
  }));
};

TeaOutlineIcon.displayName = 'TeaOutlineIcon';
TeaOutlineIcon.defaultProps = {
  size: 24
};
var _default = TeaOutlineIcon;
exports["default"] = _default;