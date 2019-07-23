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

var SnowmanIcon = function SnowmanIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17,17C17,19.76 14.76,22 12,22C9.24,22 7,19.76 7,17C7,15.5 7.65,14.17 8.69,13.25C8.26,12.61 8,11.83 8,11C8,10.86 8,10.73 8,10.59L5.04,8.87L4.83,8.71L2.29,9.39L2.03,8.43L4.24,7.84L2.26,6.69L2.76,5.82L4.74,6.97L4.15,4.75L5.11,4.5L5.8,7.04L6.04,7.14L8.73,8.69C9.11,8.15 9.62,7.71 10.22,7.42C9.5,6.87 9,6 9,5C9,3.34 10.34,2 12,2C13.66,2 15,3.34 15,5C15,6 14.5,6.87 13.78,7.42C14.38,7.71 14.89,8.15 15.27,8.69L17.96,7.14L18.2,7.04L18.89,4.5L19.85,4.75L19.26,6.97L21.24,5.82L21.74,6.69L19.76,7.84L21.97,8.43L21.71,9.39L19.17,8.71L18.96,8.87L16,10.59V11C16,11.83 15.74,12.61 15.31,13.25C16.35,14.17 17,15.5 17,17Z"
  }));
};

SnowmanIcon.displayName = 'SnowmanIcon';
SnowmanIcon.defaultProps = {
  size: 24
};
var _default = SnowmanIcon;
exports["default"] = _default;