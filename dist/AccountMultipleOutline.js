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

var AccountMultipleOutlineIcon = function AccountMultipleOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9,13.75C6.66,13.75 2,14.92 2,17.25V19H16V17.25C16,14.92 11.34,13.75 9,13.75M4.34,17C5.18,16.42 7.21,15.75 9,15.75C10.79,15.75 12.82,16.42 13.66,17M9,12C10.93,12 12.5,10.43 12.5,8.5C12.5,6.57 10.93,5 9,5C7.07,5 5.5,6.57 5.5,8.5C5.5,10.43 7.07,12 9,12M9,7C9.83,7 10.5,7.67 10.5,8.5C10.5,9.33 9.83,10 9,10C8.17,10 7.5,9.33 7.5,8.5C7.5,7.67 8.17,7 9,7M16.04,13.81C17.2,14.65 18,15.77 18,17.25V19H22V17.25C22,15.23 18.5,14.08 16.04,13.81M15,12C16.93,12 18.5,10.43 18.5,8.5C18.5,6.57 16.93,5 15,5C14.46,5 13.96,5.13 13.5,5.35C14.13,6.24 14.5,7.33 14.5,8.5C14.5,9.67 14.13,10.76 13.5,11.65C13.96,11.87 14.46,12 15,12Z"
  }));
};

AccountMultipleOutlineIcon.displayName = 'AccountMultipleOutlineIcon';
AccountMultipleOutlineIcon.defaultProps = {
  size: 24
};
var _default = AccountMultipleOutlineIcon;
exports["default"] = _default;