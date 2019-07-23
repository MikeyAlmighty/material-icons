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

var SshIcon = function SshIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4.5,9C3.9,9 3.5,9.5 3.5,10V11.75C3.5,12.25 3.9,12.75 4.5,12.75H7V13.5H3.5V15H7.5C8.1,15 8.5,14.5 8.5,14V12.25C8.5,11.75 8.1,11.25 7.5,11.25H5V10.5H8.5V9H4.5M10.5,9C9.9,9 9.5,9.5 9.5,10V11.75C9.5,12.25 9.9,12.75 10.5,12.75H13V13.5H9.5V15H13.5C14.1,15 14.5,14.5 14.5,14V12.25C14.5,11.75 14.1,11.25 13.5,11.25H11V10.5H14.5V9H10.5M15.5,9V15H17V12.5H19V15H20.5V9H19V11H17V9H15.5Z"
  }));
};

SshIcon.displayName = 'SshIcon';
SshIcon.defaultProps = {
  size: 24
};
var _default = SshIcon;
exports["default"] = _default;