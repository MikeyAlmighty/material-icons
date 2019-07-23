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

var HomeCurrencyUsdIcon = function HomeCurrencyUsdIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,3L22,12H19V20H5V12H2L12,3M9.22,8.93C8.75,9.4 8.5,10.03 8.5,10.75C8.5,12.43 10.54,13.07 11.76,13.46C13.26,13.93 13.47,14.21 13.5,14.25C13.5,15 12.15,15 12,15V15C11.37,15 11.03,14.88 10.86,14.78C10.67,14.67 10.5,14.5 10.5,14H8.5C8.5,15.43 9.24,16.16 9.85,16.5C10.18,16.7 10.57,16.84 11,16.92V18H13V16.91C14.53,16.61 15.5,15.62 15.5,14.25C15.5,12.67 13.88,12.03 12.36,11.55C10.8,11.06 10.53,10.77 10.5,10.75C10.5,10.5 10.57,10.41 10.64,10.34C10.85,10.13 11.36,10 12,10V10C12.68,10 13.5,10.13 13.5,10.75H15.5C15.5,9.34 14.56,8.37 13,8.09V7H11V8.08C10.26,8.21 9.65,8.5 9.22,8.93Z"
  }));
};

HomeCurrencyUsdIcon.displayName = 'HomeCurrencyUsdIcon';
HomeCurrencyUsdIcon.defaultProps = {
  size: 24
};
var _default = HomeCurrencyUsdIcon;
exports["default"] = _default;