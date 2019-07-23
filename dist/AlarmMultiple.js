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

var AlarmMultipleIcon = function AlarmMultipleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9.29,3.25L5.16,6.72L4,5.34L8.14,1.87L9.29,3.25M22,5.35L20.84,6.73L16.7,3.25L17.86,1.87L22,5.35M13,4C17.42,4 21,7.58 21,12C21,16.42 17.42,20 13,20C8.58,20 5,16.42 5,12C5,7.58 8.58,4 13,4M13,6C9.69,6 7,8.69 7,12C7,15.31 9.69,18 13,18C16.31,18 19,15.31 19,12C19,8.69 16.31,6 13,6M12,7.5H13.5V12.03L16.72,13.5L16.1,14.86L12,13V7.5M1,14C1,11.5 2.13,9.3 3.91,7.83C3.33,9.1 3,10.5 3,12L3.06,13.13L3,14C3,16.28 4.27,18.26 6.14,19.28C7.44,20.5 9.07,21.39 10.89,21.78C10.28,21.92 9.65,22 9,22C4.58,22 1,18.42 1,14Z"
  }));
};

AlarmMultipleIcon.displayName = 'AlarmMultipleIcon';
AlarmMultipleIcon.defaultProps = {
  size: 24
};
var _default = AlarmMultipleIcon;
exports["default"] = _default;