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

var PaletteIcon = function PaletteIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.5,12C16.67,12 16,11.33 16,10.5C16,9.67 16.67,9 17.5,9C18.33,9 19,9.67 19,10.5C19,11.33 18.33,12 17.5,12M14.5,8C13.67,8 13,7.33 13,6.5C13,5.67 13.67,5 14.5,5C15.33,5 16,5.67 16,6.5C16,7.33 15.33,8 14.5,8M9.5,8C8.67,8 8,7.33 8,6.5C8,5.67 8.67,5 9.5,5C10.33,5 11,5.67 11,6.5C11,7.33 10.33,8 9.5,8M6.5,12C5.67,12 5,11.33 5,10.5C5,9.67 5.67,9 6.5,9C7.33,9 8,9.67 8,10.5C8,11.33 7.33,12 6.5,12M12,3C7.03,3 3,7.03 3,12C3,16.97 7.03,21 12,21C12.83,21 13.5,20.33 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5C12.73,16.67 13.4,16 14.23,16H16C18.76,16 21,13.76 21,11C21,6.58 16.97,3 12,3Z"
  }));
};

PaletteIcon.displayName = 'PaletteIcon';
PaletteIcon.defaultProps = {
  size: 24
};
var _default = PaletteIcon;
exports["default"] = _default;