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

var ReflectHorizontalIcon = function ReflectHorizontalIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,20H14C13.45,20 13,19.55 13,19V4.97C13,4.5 13.31,4.12 13.74,4C14.19,3.88 14.65,4.08 14.87,4.47L22.89,18.5C23.07,18.81 23.07,19.19 22.89,19.5C22.71,19.81 22.38,20 22,20M2,20C1.62,20 1.29,19.81 1.11,19.5C0.93,19.19 0.93,18.81 1.11,18.5L9.13,4.47C9.35,4.08 9.81,3.88 10.26,4C10.69,4.12 11,4.5 11,4.97V19C11,19.55 10.55,20 10,20H2M9,18V8.74L3.71,18H9Z"
  }));
};

ReflectHorizontalIcon.displayName = 'ReflectHorizontalIcon';
ReflectHorizontalIcon.defaultProps = {
  size: 24
};
var _default = ReflectHorizontalIcon;
exports["default"] = _default;