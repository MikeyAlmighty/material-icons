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

var UbisoftIcon = function UbisoftIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11.41,2C5.21,2 2.53,7.53 2.53,7.53L3.32,8.09C3.32,8.09 2.33,10 2.35,12.4C2.35,17.34 6.29,22 12.07,22C17.33,22 21.67,17.71 21.67,12.41C21.67,5.5 16.31,2 11.41,2M11.47,3.69C16.31,3.69 20.07,7.6 20.07,12.14C20.07,16.95 16.45,20.3 12.23,20.3C9.13,20.3 6.33,17.94 6.33,14.7C6.33,12.82 7.32,11.5 8.44,10.82L8.6,11C8.3,11.24 7.43,12.64 7.43,14C7.43,16.56 9.43,18.33 11.95,18.33C15.16,18.33 17.3,15.59 17.3,12.41C17.3,8.71 14.03,5.57 10.1,5.57C7.93,5.57 6.09,6.5 5.03,7.33L4.86,7.18C6.25,5.04 8.65,3.69 11.47,3.69M10,7.23C12.53,7.23 14.97,8.89 15.59,11.25L15.36,11.33C14.27,9.88 12.47,8.68 10.35,8.68C6.44,8.68 4.39,12.23 4.69,15.19L4.46,15.28C4.46,15.28 4.03,14.33 4.03,13.2C4.03,9.93 6.71,7.23 10,7.23M11.68,11.33C12.86,11.33 13.81,12.3 13.81,13.44C13.81,14.38 13.21,14.94 13.21,14.94L13.92,15.45C13.92,15.45 13.21,16.57 11.76,16.57C10.37,16.57 9.13,15.44 9.13,13.93C9.13,12.38 10.47,11.33 11.68,11.33Z"
  }));
};

UbisoftIcon.displayName = 'UbisoftIcon';
UbisoftIcon.defaultProps = {
  size: 24
};
var _default = UbisoftIcon;
exports["default"] = _default;