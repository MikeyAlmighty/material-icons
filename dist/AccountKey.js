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

var AccountKeyIcon = function AccountKeyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11,10V12H10V14H8V12H5.83C5.42,13.17 4.31,14 3,14C1.34,14 0,12.66 0,11C0,9.34 1.34,8 3,8C4.31,8 5.42,8.83 5.83,10H11M3,10C2.45,10 2,10.45 2,11C2,11.55 2.45,12 3,12C3.55,12 4,11.55 4,11C4,10.45 3.55,10 3,10M16,14C18.67,14 24,15.34 24,18V20H8V18C8,15.34 13.33,14 16,14M16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12Z"
  }));
};

AccountKeyIcon.displayName = 'AccountKeyIcon';
AccountKeyIcon.defaultProps = {
  size: 24
};
var _default = AccountKeyIcon;
exports["default"] = _default;