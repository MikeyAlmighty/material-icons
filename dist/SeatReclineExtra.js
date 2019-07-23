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

var SeatReclineExtraIcon = function SeatReclineExtraIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5.35,5.64C4.45,5 4.23,3.76 4.86,2.85C5.5,1.95 6.74,1.73 7.65,2.36C8.55,3 8.77,4.24 8.14,5.15C7.5,6.05 6.26,6.27 5.35,5.64M16,19H8.93C7.45,19 6.19,17.92 5.97,16.46L4,7H2L4,16.76C4.37,19.2 6.47,21 8.94,21H16M16.23,15H11.35L10.32,10.9C11.9,11.79 13.6,12.44 15.47,12.12V10C13.84,10.3 12.03,9.72 10.78,8.74L9.14,7.47C8.91,7.29 8.65,7.17 8.38,7.09C8.06,7 7.72,6.97 7.39,7.03H7.37C6.14,7.25 5.32,8.42 5.53,9.64L6.88,15.56C7.16,17 8.39,18 9.83,18H16.68L20.5,21L22,19.5"
  }));
};

SeatReclineExtraIcon.displayName = 'SeatReclineExtraIcon';
SeatReclineExtraIcon.defaultProps = {
  size: 24
};
var _default = SeatReclineExtraIcon;
exports["default"] = _default;