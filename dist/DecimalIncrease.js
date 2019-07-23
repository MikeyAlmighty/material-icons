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

var DecimalIncreaseIcon = function DecimalIncreaseIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,17L19,20V18H13V16H19V14L22,17M9,5C10.66,5 12,6.34 12,8V11C12,12.66 10.66,14 9,14C7.34,14 6,12.66 6,11V8C6,6.34 7.34,5 9,5M9,7C8.45,7 8,7.45 8,8V11C8,11.55 8.45,12 9,12C9.55,12 10,11.55 10,11V8C10,7.45 9.55,7 9,7M16,5C17.66,5 19,6.34 19,8V11C19,12.66 17.66,14 16,14C14.34,14 13,12.66 13,11V8C13,6.34 14.34,5 16,5M16,7C15.45,7 15,7.45 15,8V11C15,11.55 15.45,12 16,12C16.55,12 17,11.55 17,11V8C17,7.45 16.55,7 16,7M4,12C4.55,12 5,12.45 5,13C5,13.55 4.55,14 4,14C3.45,14 3,13.55 3,13C3,12.45 3.45,12 4,12Z"
  }));
};

DecimalIncreaseIcon.displayName = 'DecimalIncreaseIcon';
DecimalIncreaseIcon.defaultProps = {
  size: 24
};
var _default = DecimalIncreaseIcon;
exports["default"] = _default;