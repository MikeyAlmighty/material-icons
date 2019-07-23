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

var XamarinIcon = function XamarinIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22.75,11.07C22.91,11.35 23,11.67 23,12C23,12.33 22.91,12.65 22.75,12.93L18.08,21C17.72,21.62 17.06,22 16.35,22H7.65C6.94,22 6.28,21.62 5.92,21L1.25,12.93C1.09,12.65 1,12.33 1,12C1,11.67 1.09,11.35 1.25,11.07L5.92,3C6.28,2.38 6.94,2 7.65,2H16.35C17.06,2 17.72,2.38 18.08,3L22.75,11.07M12,12V11.9L9.42,7.1L9.25,7H7.66L7.5,7.1V7.3L10,12L7.5,16.7V16.9L7.66,17H9.25L9.42,16.9L12,12.1V12L12.03,12.1L14.58,16.9L14.75,17H16.34L16.5,16.9V16.7L14,12L16.5,7.3V7.1L16.34,7H14.75L14.58,7.1L12.03,11.9L12,12Z"
  }));
};

XamarinIcon.displayName = 'XamarinIcon';
XamarinIcon.defaultProps = {
  size: 24
};
var _default = XamarinIcon;
exports["default"] = _default;