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

var AccountKeyOutlineIcon = function AccountKeyOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5.83,10C5.42,8.83 4.31,8 3,8C1.34,8 0,9.34 0,11C0,12.66 1.34,14 3,14C4.31,14 5.42,13.17 5.83,12H8V14H10V12H11V10H5.83M3,12C2.45,12 2,11.55 2,11C2,10.45 2.45,10 3,10C3.55,10 4,10.45 4,11C4,11.55 3.55,12 3,12M16,4C13.79,4 12,5.79 12,8C12,10.21 13.79,12 16,12C18.21,12 20,10.21 20,8C20,5.79 18.21,4 16,4M16,10.1C14.84,10.1 13.9,9.16 13.9,8C13.9,6.84 14.84,5.9 16,5.9C17.16,5.9 18.1,6.84 18.1,8C18.1,9.16 17.16,10.1 16,10.1M16,13C13.33,13 8,14.33 8,17V20H24V17C24,14.33 18.67,13 16,13M22.1,18.1H9.9V17C9.9,16.36 13,14.9 16,14.9C18.97,14.9 22.1,16.36 22.1,17V18.1Z"
  }));
};

AccountKeyOutlineIcon.displayName = 'AccountKeyOutlineIcon';
AccountKeyOutlineIcon.defaultProps = {
  size: 24
};
var _default = AccountKeyOutlineIcon;
exports["default"] = _default;