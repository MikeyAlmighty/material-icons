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

var CircularSawIcon = function CircularSawIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13,11C13.55,11 14,11.45 14,12C14,12.55 13.55,13 13,13C12.45,13 12,12.55 12,12C12,11.45 12.45,11 13,11M7.86,6.25C9.14,4.87 10.97,4 13,4C16.5,4 19.44,6.61 19.93,10H22V12H16C16,10.34 14.66,9 13,9C11.34,9 10,10.34 10,12H2V10H2.05C2.25,7.73 3.14,5.66 4.5,4L7.86,6.25M6.73,7.89L5.06,6.77C4.53,7.75 4.18,8.84 4.06,10H6.07C6.18,9.25 6.4,8.54 6.73,7.89M7.4,15.4L6,14H11.79C12.03,14.42 12.5,14.7 13,14.7C13.5,14.7 13.97,14.42 14.21,14H20V15.4C18.39,14.42 18.46,15.75 18.46,15.75V17.71L16.5,19.67C16,17.92 15.1,18.9 15.1,18.9L13.7,20.3H10.9C11.88,18.69 10.55,18.76 10.55,18.76H8.59L6.63,16.8C8.38,16.31 7.4,15.4 7.4,15.4Z"
  }));
};

CircularSawIcon.displayName = 'CircularSawIcon';
CircularSawIcon.defaultProps = {
  size: 24
};
var _default = CircularSawIcon;
exports["default"] = _default;