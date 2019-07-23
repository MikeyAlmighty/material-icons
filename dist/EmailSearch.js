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

var EmailSearchIcon = function EmailSearchIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,4H19C20.1,4 21,4.9 21,6V10.82C20,9.85 18.7,9.23 17.31,9.06L19,8V6L11,11L3,6V8L10.62,12.76C10.21,13.62 10,14.55 10,15.5C10,17.18 10.65,18.79 11.81,20H3C1.9,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4M16.5,11C19,11 21,13 21,15.5C21,16.38 20.75,17.21 20.31,17.9L23.39,21L22,22.39L18.88,19.32C18.19,19.75 17.37,20 16.5,20C14,20 12,18 12,15.5C12,13 14,11 16.5,11M16.5,13C15.12,13 14,14.12 14,15.5C14,16.88 15.12,18 16.5,18C17.88,18 19,16.88 19,15.5C19,14.12 17.88,13 16.5,13Z"
  }));
};

EmailSearchIcon.displayName = 'EmailSearchIcon';
EmailSearchIcon.defaultProps = {
  size: 24
};
var _default = EmailSearchIcon;
exports["default"] = _default;