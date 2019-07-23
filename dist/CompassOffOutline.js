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

var CompassOffOutlineIcon = function CompassOffOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M1,3.5L2.28,2.25L21.75,21.72L20.5,23L17.7,20.22C16.08,21.34 14.12,22 12,22C6.48,22 2,17.52 2,12C2,9.88 2.66,7.92 3.78,6.3L1,3.5M7,17L9.39,11.91L5.23,7.74C4.45,9 4,10.44 4,12C4,16.42 7.58,20 12,20C13.56,20 15,19.55 16.26,18.77L12.09,14.61L7,17M17,7L14.62,12.05L11.95,9.38L17,7M12,2C17.52,2 22,6.48 22,12C22,14.1 21.35,16.06 20.24,17.67L18.8,16.22C19.56,15 20,13.55 20,12C20,7.58 16.42,4 12,4C10.45,4 9,4.44 7.78,5.2L6.33,3.76C7.94,2.65 9.9,2 12,2Z"
  }));
};

CompassOffOutlineIcon.displayName = 'CompassOffOutlineIcon';
CompassOffOutlineIcon.defaultProps = {
  size: 24
};
var _default = CompassOffOutlineIcon;
exports["default"] = _default;