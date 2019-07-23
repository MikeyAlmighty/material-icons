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

var VibrateOffIcon = function VibrateOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8.2,5L6.55,3.35C6.81,3.12 7.15,3 7.5,3H16.5C17.33,3 18,3.67 18,4.5V14.8L16,12.8V5H8.2M0,15H2V9H0V15M21,17V7H19V15.8L20.2,17H21M3,17H5V7H3V17M18,17.35L22.11,21.46L20.84,22.73L18,19.85C17.83,20.54 17.21,21 16.5,21H7.5C6.67,21 6,20.33 6,19.5V7.89L1.11,3L2.39,1.73L6.09,5.44L8,7.34L16,15.34L18,17.34V17.35M16,17.89L8,9.89V19H16V17.89M22,9V15H24V9H22Z"
  }));
};

VibrateOffIcon.displayName = 'VibrateOffIcon';
VibrateOffIcon.defaultProps = {
  size: 24
};
var _default = VibrateOffIcon;
exports["default"] = _default;