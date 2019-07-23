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

var WeatherTornadoIcon = function WeatherTornadoIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21,5H3C2.45,5 2,4.55 2,4C2,3.45 2.45,3 3,3H21C21.55,3 22,3.45 22,4C22,4.55 21.55,5 21,5M20,8C20,7.45 19.55,7 19,7H5C4.45,7 4,7.45 4,8C4,8.55 4.45,9 5,9H19C19.55,9 20,8.55 20,8M21,12C21,11.45 20.55,11 20,11H10C9.45,11 9,11.45 9,12C9,12.55 9.45,13 10,13H20C20.55,13 21,12.55 21,12M16,16C16,15.45 15.55,15 15,15H9C8.45,15 8,15.45 8,16C8,16.55 8.45,17 9,17H15C15.55,17 16,16.55 16,16M13,20C13,19.45 12.55,19 12,19H10C9.45,19 9,19.45 9,20C9,20.55 9.45,21 10,21H12C12.55,21 13,20.55 13,20Z"
  }));
};

WeatherTornadoIcon.displayName = 'WeatherTornadoIcon';
WeatherTornadoIcon.defaultProps = {
  size: 24
};
var _default = WeatherTornadoIcon;
exports["default"] = _default;