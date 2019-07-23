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

var GlassTulipIcon = function GlassTulipIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8,2H16C15.67,2.67 15.33,3.33 15.58,5C15.83,6.67 16.67,9.33 16.25,10.74C15.83,12.14 14.17,12.28 13.33,13.86C12.5,15.44 12.5,18.47 13.08,19.9C13.67,21.33 14.83,21.17 15.42,21.25C16,21.33 16,21.67 16,22H8C8,21.67 8,21.33 8.58,21.25C9.17,21.17 10.33,21.33 10.92,19.9C11.5,18.47 11.5,15.44 10.67,13.86C9.83,12.28 8.17,12.14 7.75,10.74C7.33,9.33 8.17,6.67 8.42,5C8.67,3.33 8.33,2.67 8,2M10,4C10,5.19 9.83,6.17 9.64,7H14.27C14.13,6.17 14,5.19 14,4H10Z"
  }));
};

GlassTulipIcon.displayName = 'GlassTulipIcon';
GlassTulipIcon.defaultProps = {
  size: 24
};
var _default = GlassTulipIcon;
exports["default"] = _default;