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

var KeyboardOffOutlineIcon = function KeyboardOffOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M1,4.27L2.47,5.74C2.18,6.08 2,6.5 2,7V17C2,18.1 2.9,19 4,19H15.73L18.73,22L20,20.72L2.28,3L1,4.27M4,17V7.27L5,8.27V10H6.73L8,11.27V13H9.73L10.73,14H8V16H12.73L13.73,17H4M5,11H7V13H5V11M17,11H19V13H17V11M19,10H17V8H19V10M14,11H16V13H14.83L14,12.17V11M13,10H11.83L11,9.17V8H13V10M22,7V17C22,17.86 21.45,18.58 20.7,18.87L18.83,17H20V7H8.83L6.83,5H20C21.1,5 22,5.9 22,7M16,10H14V8H16V10Z"
  }));
};

KeyboardOffOutlineIcon.displayName = 'KeyboardOffOutlineIcon';
KeyboardOffOutlineIcon.defaultProps = {
  size: 24
};
var _default = KeyboardOffOutlineIcon;
exports["default"] = _default;