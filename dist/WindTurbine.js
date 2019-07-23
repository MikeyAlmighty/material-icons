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

var WindTurbineIcon = function WindTurbineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13.33,11.67L16.21,14.58C17.62,13.16 16.21,11.75 16.21,11.75L14.72,10.24C14.9,9.86 15,9.44 15,9C15,7.95 14.46,7.03 13.64,6.5L15,2.11C13.09,1.53 12.5,3.44 12.5,3.44L11.69,6.03C10.46,6.16 9.46,7 9.13,8.18L4.67,9.63C5.31,11.53 7.2,10.9 7.2,10.9L9.27,10.23C9.61,10.97 10.23,11.54 11,11.82V19C11,19 9,19 9,21C9,21.5 9,21.81 9,22H15V21C15,21 15,19 13,19V11.82C13.12,11.78 13.23,11.72 13.33,11.67M10.5,9C10.5,8.17 11.17,7.5 12,7.5C12.83,7.5 13.5,8.17 13.5,9C13.5,9.83 12.83,10.5 12,10.5C11.17,10.5 10.5,9.83 10.5,9Z"
  }));
};

WindTurbineIcon.displayName = 'WindTurbineIcon';
WindTurbineIcon.defaultProps = {
  size: 24
};
var _default = WindTurbineIcon;
exports["default"] = _default;