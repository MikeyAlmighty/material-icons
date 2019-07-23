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

var TableSearchIcon = function TableSearchIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19.3,17.89C20.62,15.79 20,13 17.89,11.68C15.79,10.36 13,11 11.68,13.09C10.36,15.2 11,18 13.09,19.3C14.56,20.22 16.42,20.22 17.89,19.3L21,22.39L22.39,21L19.3,17.89M17.3,17.27C16.32,18.25 14.74,18.24 13.76,17.27C12.79,16.29 12.79,14.71 13.77,13.73C14.74,12.76 16.32,12.76 17.3,13.73C18.26,14.72 18.25,16.3 17.27,17.27H17.3M19,4H5C3.9,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H10.81C10.25,19.42 9.8,18.74 9.5,18H5V14H9.18C9.34,13.29 9.61,12.61 10,12H5V8H11V10.81C11.58,10.25 12.26,9.8 13,9.5V8H19V10C19.4,10.25 19.77,10.55 20.1,10.88C20.44,11.22 20.74,11.59 21,12V6C21,4.9 20.1,4 19,4Z"
  }));
};

TableSearchIcon.displayName = 'TableSearchIcon';
TableSearchIcon.defaultProps = {
  size: 24
};
var _default = TableSearchIcon;
exports["default"] = _default;