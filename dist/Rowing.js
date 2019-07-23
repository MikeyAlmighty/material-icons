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

var RowingIcon = function RowingIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8.5,14.5L4,19L5.5,20.5L9,17H11L8.5,14.5M15,1C13.9,1 13,1.9 13,3C13,4.1 13.9,5 15,5C16.1,5 17,4.1 17,3C17,1.9 16.1,1 15,1M21,21L18,24L15,21V19.5L7.91,12.41C7.6,12.46 7.3,12.5 7,12.5V10.32C8.66,10.35 10.61,9.45 11.67,8.28L13.07,6.73C13.26,6.5 13.5,6.35 13.76,6.23C14.05,6.09 14.38,6 14.72,6H14.75C16,6 17,7 17,8.26V14C17,14.85 16.65,15.62 16.08,16.17L12.5,12.59V10.32C11.87,10.84 11.07,11.34 10.21,11.71L16.5,18H18L21,21Z"
  }));
};

RowingIcon.displayName = 'RowingIcon';
RowingIcon.defaultProps = {
  size: 24
};
var _default = RowingIcon;
exports["default"] = _default;