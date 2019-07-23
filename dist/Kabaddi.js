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

var KabaddiIcon = function KabaddiIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11.25,10.55C12.28,11.58 13.5,12.09 14.86,12.09L15,14.16C13.06,14.16 11.38,13.47 9.94,12.09L9.23,11.39L6.89,13.78L9,15.89V21.89H7V16.73L5.72,15.56V17.77L1.45,22L0.05,20.58L3.7,16.97L2.63,14L2.58,13.85L2.5,13.64V13.45C2.42,12.89 2.63,12.38 3.09,11.91L6.42,8.58C6.83,8.17 7.3,7.97 7.83,7.97C8.3,7.97 8.67,8.08 8.95,8.3L11.25,10.55M24,11.86H22V8.5L20.2,7.78L21.09,12.23L22.13,17.44L23,21.89H20.91L19.08,13.88L17,15.89V21.89H15V14.39L17.11,12.38L16.5,9.38C15.94,10 15.23,10.55 14.39,11C13.45,10.92 12.63,10.5 11.91,9.8C13.47,9.5 14.59,8.75 15.28,7.5L16.31,5.86C16.94,4.86 17.81,4.59 18.94,5.06L24,7.17V11.86M11.42,4.4C12.5,4.4 13.42,5.29 13.42,6.4C13.42,7.5 12.52,8.4 11.42,8.4C10.31,8.4 9.42,7.5 9.42,6.4C9.42,5.29 10.31,4.4 11.42,4.4M16.5,0.35C17.63,0.35 18.5,1.25 18.5,2.35C18.5,3.46 17.63,4.35 16.5,4.35C15.42,4.35 14.5,3.46 14.5,2.35C14.5,1.25 15.4,0.35 16.5,0.35Z"
  }));
};

KabaddiIcon.displayName = 'KabaddiIcon';
KabaddiIcon.defaultProps = {
  size: 24
};
var _default = KabaddiIcon;
exports["default"] = _default;