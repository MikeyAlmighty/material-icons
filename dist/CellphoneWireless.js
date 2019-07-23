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

var CellphoneWirelessIcon = function CellphoneWirelessIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.07,4.93C21.88,6.74 23,9.24 23,12C23,14.76 21.88,17.26 20.07,19.07L18.66,17.66C20.11,16.22 21,14.22 21,12C21,9.79 20.11,7.78 18.66,6.34L20.07,4.93M17.24,7.76C18.33,8.85 19,10.35 19,12C19,13.65 18.33,15.15 17.24,16.24L15.83,14.83C16.55,14.11 17,13.11 17,12C17,10.89 16.55,9.89 15.83,9.17L17.24,7.76M13,10C14.1,10 15,10.9 15,12C15,13.1 14.1,14 13,14C11.9,14 11,13.1 11,12C11,10.9 11.9,10 13,10M11.5,1C12.88,1 14,2.12 14,3.5V8H12V4H3V19H12V16H14V20.5C14,21.88 12.88,23 11.5,23H3.5C2.12,23 1,21.88 1,20.5V3.5C1,2.12 2.12,1 3.5,1H11.5Z"
  }));
};

CellphoneWirelessIcon.displayName = 'CellphoneWirelessIcon';
CellphoneWirelessIcon.defaultProps = {
  size: 24
};
var _default = CellphoneWirelessIcon;
exports["default"] = _default;