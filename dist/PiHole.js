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

var PiHoleIcon = function PiHoleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5.62,2C9.5,2 11.57,4.29 11.77,7.93C12.5,3.57 15.93,4.08 15.93,4.08C16.1,6.55 14.07,8.05 11.77,8.17C11.12,6.81 7.25,3.47 7.25,3.47C7.23,3.5 10.97,6.74 10.83,8.15C8.33,7.88 5.82,6 5.62,2M6.06,13.11L9.92,9.25C11.09,8.08 13,8.08 14.16,9.25L18,13.11C19.19,14.28 19.19,16.18 18,17.35L14.16,21.21C13,22.38 11.09,22.38 9.92,21.21L6.06,17.35C4.89,16.18 4.89,14.28 6.06,13.11M9.39,19.59C9.39,18.36 10.15,16.85 12.09,16.85C13.4,16.85 14.87,18.1 16.31,17.96C14.87,17.92 13.59,16.85 13.59,15.19C13.59,13.86 14.69,12.9 14.69,11.34C14.63,12.33 13.82,13.77 12,13.77C10.59,13.77 9.55,12.63 7.87,12.63C8.58,12.67 10.5,13.3 10.5,15.35C10.5,17 9.39,17.5 9.39,19.59Z"
  }));
};

PiHoleIcon.displayName = 'PiHoleIcon';
PiHoleIcon.defaultProps = {
  size: 24
};
var _default = PiHoleIcon;
exports["default"] = _default;