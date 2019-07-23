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

var MotherNurseIcon = function MotherNurseIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C13.66,2 15,3.34 15,5C15,6.66 13.66,8 12,8C10.34,8 9,6.66 9,5C9,3.34 10.34,2 12,2M20,18L18,12.56C17.65,11.57 17.34,10.71 16,10C14.62,9.3 13.62,9 12,9C10.37,9 9.38,9.3 8,10C6.66,10.71 6.35,11.57 6,12.56L4,18C3.68,19.35 6.36,20.44 8.11,21.19V19C8.11,18.05 8.97,17.38 10.69,16.97C10.85,16.93 11,16.91 11.12,16.89C10.58,16.07 10.36,15.34 10.34,15.28L12.11,14.68C12.12,14.7 12.63,16.27 13.84,17.06C14.05,17.13 14.26,17.21 14.46,17.3C15.23,17.64 15.69,18.08 15.84,18.61C14.5,19.14 13.22,19.41 12,19.41L11,19.31V21.94L12,22C13.37,22 14.67,21.72 15.89,21.19C17.64,20.44 20.25,19.13 20,18M15.5,17C14.67,17 14,16.33 14,15.5C14,14.67 14.67,14 15.5,14C16.33,14 17,14.67 17,15.5C17,16.33 16.33,17 15.5,17Z"
  }));
};

MotherNurseIcon.displayName = 'MotherNurseIcon';
MotherNurseIcon.defaultProps = {
  size: 24
};
var _default = MotherNurseIcon;
exports["default"] = _default;