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

var TimerOffIcon = function TimerOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,20C8.13,20 5,16.87 5,13C5,11.72 5.35,10.5 5.95,9.5L15.5,19.04C14.5,19.65 13.28,20 12,20M3,4L1.75,5.27L4.5,8.03C3.55,9.45 3,11.16 3,13C3,17.97 7.03,22 12,22C13.84,22 15.55,21.45 17,20.5L19.5,23L20.75,21.73L13.04,14L3,4M11,9.44L13,11.44V8H11M15,1H9V3H15M19.04,4.55L17.62,5.97C16.07,4.74 14.12,4 12,4C10.17,4 8.47,4.55 7.05,5.5L8.5,6.94C9.53,6.35 10.73,6 12,6C15.87,6 19,9.13 19,13C19,14.27 18.65,15.47 18.06,16.5L19.5,17.94C20.45,16.53 21,14.83 21,13C21,10.88 20.26,8.93 19.03,7.39L20.45,5.97L19.04,4.55Z"
  }));
};

TimerOffIcon.displayName = 'TimerOffIcon';
TimerOffIcon.defaultProps = {
  size: 24
};
var _default = TimerOffIcon;
exports["default"] = _default;