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

var MathCompassIcon = function MathCompassIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,19.88V22L18.2,20.83L13.41,11.83C14.07,11.62 14.67,11.28 15.19,10.83L20,19.88M15,7C15,8.66 13.66,10 12,10C11.85,10 11.71,10 11.56,10L5.8,20.83L4,22V19.88L9.79,9C8.69,7.77 8.79,5.87 10.03,4.76C10.57,4.28 11.27,4 12,4V2C12.55,2 13,2.45 13,3V4.18C14.2,4.6 15,5.73 15,7M13,7C13,6.45 12.55,6 12,6C11.45,6 11,6.45 11,7C11,7.55 11.45,8 12,8C12.55,8 13,7.55 13,7Z"
  }));
};

MathCompassIcon.displayName = 'MathCompassIcon';
MathCompassIcon.defaultProps = {
  size: 24
};
var _default = MathCompassIcon;
exports["default"] = _default;