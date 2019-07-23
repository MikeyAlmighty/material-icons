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

var BlurRadialIcon = function BlurRadialIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14,13C13.45,13 13,13.45 13,14C13,14.55 13.45,15 14,15C14.55,15 15,14.55 15,14C15,13.45 14.55,13 14,13M14,16.5C13.72,16.5 13.5,16.72 13.5,17C13.5,17.28 13.72,17.5 14,17.5C14.28,17.5 14.5,17.28 14.5,17C14.5,16.72 14.28,16.5 14,16.5M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M17,9.5C16.72,9.5 16.5,9.72 16.5,10C16.5,10.28 16.72,10.5 17,10.5C17.28,10.5 17.5,10.28 17.5,10C17.5,9.72 17.28,9.5 17,9.5M17,13.5C16.72,13.5 16.5,13.72 16.5,14C16.5,14.28 16.72,14.5 17,14.5C17.28,14.5 17.5,14.28 17.5,14C17.5,13.72 17.28,13.5 17,13.5M14,7.5C14.28,7.5 14.5,7.28 14.5,7C14.5,6.72 14.28,6.5 14,6.5C13.72,6.5 13.5,6.72 13.5,7C13.5,7.28 13.72,7.5 14,7.5M14,9C13.45,9 13,9.45 13,10C13,10.55 13.45,11 14,11C14.55,11 15,10.55 15,10C15,9.45 14.55,9 14,9M10,7.5C10.28,7.5 10.5,7.28 10.5,7C10.5,6.72 10.28,6.5 10,6.5C9.72,6.5 9.5,6.72 9.5,7C9.5,7.28 9.72,7.5 10,7.5M7,13.5C6.72,13.5 6.5,13.72 6.5,14C6.5,14.28 6.72,14.5 7,14.5C7.28,14.5 7.5,14.28 7.5,14C7.5,13.72 7.28,13.5 7,13.5M10,16.5C9.72,16.5 9.5,16.72 9.5,17C9.5,17.28 9.72,17.5 10,17.5C10.28,17.5 10.5,17.28 10.5,17C10.5,16.72 10.28,16.5 10,16.5M7,9.5C6.72,9.5 6.5,9.72 6.5,10C6.5,10.28 6.72,10.5 7,10.5C7.28,10.5 7.5,10.28 7.5,10C7.5,9.72 7.28,9.5 7,9.5M10,13C9.45,13 9,13.45 9,14C9,14.55 9.45,15 10,15C10.55,15 11,14.55 11,14C11,13.45 10.55,13 10,13M10,9C9.45,9 9,9.45 9,10C9,10.55 9.45,11 10,11C10.55,11 11,10.55 11,10C11,9.45 10.55,9 10,9Z"
  }));
};

BlurRadialIcon.displayName = 'BlurRadialIcon';
BlurRadialIcon.defaultProps = {
  size: 24
};
var _default = BlurRadialIcon;
exports["default"] = _default;