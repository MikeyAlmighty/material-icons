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

var WavesIcon = function WavesIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,12H22V14H20C18.62,14 17.26,13.65 16,13C13.5,14.3 10.5,14.3 8,13C6.74,13.65 5.37,14 4,14H2V12H4C5.39,12 6.78,11.53 8,10.67C10.44,12.38 13.56,12.38 16,10.67C17.22,11.53 18.61,12 20,12M20,6H22V8H20C18.62,8 17.26,7.65 16,7C13.5,8.3 10.5,8.3 8,7C6.74,7.65 5.37,8 4,8H2V6H4C5.39,6 6.78,5.53 8,4.67C10.44,6.38 13.56,6.38 16,4.67C17.22,5.53 18.61,6 20,6M20,18H22V20H20C18.62,20 17.26,19.65 16,19C13.5,20.3 10.5,20.3 8,19C6.74,19.65 5.37,20 4,20H2V18H4C5.39,18 6.78,17.53 8,16.67C10.44,18.38 13.56,18.38 16,16.67C17.22,17.53 18.61,18 20,18Z"
  }));
};

WavesIcon.displayName = 'WavesIcon';
WavesIcon.defaultProps = {
  size: 24
};
var _default = WavesIcon;
exports["default"] = _default;