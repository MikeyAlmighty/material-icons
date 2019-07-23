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

var KeyboardOffIcon = function KeyboardOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M1,4.27L2.28,3L20,20.72L18.73,22L15.73,19H4C2.89,19 2,18.1 2,17V7C2,6.5 2.18,6.07 2.46,5.73L1,4.27M19,10V8H17V10H19M19,13V11H17V13H19M16,10V8H14V10H16M16,13V11H14V12.18L11.82,10H13V8H11V9.18L9.82,8L6.82,5H20C21.1,5 22,5.9 22,7V17C22,17.86 21.46,18.59 20.7,18.87L14.82,13H16M8,15V17H13.73L11.73,15H8M5,10H6.73L5,8.27V10M7,13V11H5V13H7M8,13H9.73L8,11.27V13Z"
  }));
};

KeyboardOffIcon.displayName = 'KeyboardOffIcon';
KeyboardOffIcon.defaultProps = {
  size: 24
};
var _default = KeyboardOffIcon;
exports["default"] = _default;