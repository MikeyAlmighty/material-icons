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

var WechatIcon = function WechatIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.19,8 16.38,8 16.56,8.03C15.54,5.69 12.78,4 9.5,4M6.5,6.5C7.05,6.5 7.5,6.95 7.5,7.5C7.5,8.05 7.05,8.5 6.5,8.5C5.95,8.5 5.5,8.05 5.5,7.5C5.5,6.95 5.95,6.5 6.5,6.5M11.5,6.5C12.05,6.5 12.5,6.95 12.5,7.5C12.5,8.05 12.05,8.5 11.5,8.5C10.95,8.5 10.5,8.05 10.5,7.5C10.5,6.95 10.95,6.5 11.5,6.5M16,9C12.69,9 10,11.24 10,14C10,16.76 12.69,19 16,19C16.67,19 17.31,18.92 17.91,18.75L20,20L19.38,18.13C20.95,17.22 22,15.71 22,14C22,11.24 19.31,9 16,9M14,11.5C14.55,11.5 15,11.95 15,12.5C15,13.05 14.55,13.5 14,13.5C13.45,13.5 13,13.05 13,12.5C13,11.95 13.45,11.5 14,11.5M18,11.5C18.55,11.5 19,11.95 19,12.5C19,13.05 18.55,13.5 18,13.5C17.45,13.5 17,13.05 17,12.5C17,11.95 17.45,11.5 18,11.5Z"
  }));
};

WechatIcon.displayName = 'WechatIcon';
WechatIcon.defaultProps = {
  size: 24
};
var _default = WechatIcon;
exports["default"] = _default;