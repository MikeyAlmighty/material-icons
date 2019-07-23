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

var PokemonGoIcon = function PokemonGoIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C15.87,2 19,5.13 19,9C19,10.4 18.59,11.71 17.88,12.8L12,22.21L6.12,12.8C5.41,11.71 5,10.4 5,9C5,5.13 8.13,2 12,2M12,3.5C9.3,3.5 7.06,5.44 6.59,8H9.17C9.58,6.83 10.69,6 12,6C13.31,6 14.42,6.83 14.83,8H17.41C16.94,5.44 14.7,3.5 12,3.5M12,12C10.69,12 9.58,11.17 9.17,10H6.59C6.72,10.69 6.97,11.34 7.34,11.91V11.91L7.38,12C8.36,13.5 10.06,14.5 12,14.5C13.94,14.5 15.64,13.5 16.62,12L16.66,11.91V11.91C17.03,11.34 17.28,10.69 17.41,10H14.83C14.42,11.17 13.31,12 12,12M12,7.5C11.17,7.5 10.5,8.17 10.5,9C10.5,9.83 11.17,10.5 12,10.5C12.83,10.5 13.5,9.83 13.5,9C13.5,8.17 12.83,7.5 12,7.5Z"
  }));
};

PokemonGoIcon.displayName = 'PokemonGoIcon';
PokemonGoIcon.defaultProps = {
  size: 24
};
var _default = PokemonGoIcon;
exports["default"] = _default;