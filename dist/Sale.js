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

var SaleIcon = function SaleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.65,2.85L19.26,6.71L22.77,8.5L21,12L22.78,15.5L19.24,17.29L18.63,21.15L14.74,20.54L11.97,23.3L9.19,20.5L5.33,21.14L4.71,17.25L1.22,15.47L3,11.97L1.23,8.5L4.74,6.69L5.35,2.86L9.22,3.5L12,0.69L14.77,3.46L18.65,2.85M9.5,7C8.67,7 8,7.67 8,8.5C8,9.33 8.67,10 9.5,10C10.33,10 11,9.33 11,8.5C11,7.67 10.33,7 9.5,7M14.5,14C13.67,14 13,14.67 13,15.5C13,16.33 13.67,17 14.5,17C15.33,17 16,16.33 16,15.5C16,14.67 15.33,14 14.5,14M8.41,17L17,8.41L15.59,7L7,15.59L8.41,17Z"
  }));
};

SaleIcon.displayName = 'SaleIcon';
SaleIcon.defaultProps = {
  size: 24
};
var _default = SaleIcon;
exports["default"] = _default;