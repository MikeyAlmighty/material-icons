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

var WifiStarIcon = function WifiStarIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,6C8.6,6 5.5,7.1 3,9L1.2,6.6C4.2,4.3 8,3 12,3C16,3 19.8,4.3 22.8,6.6L21,9C18.5,7.1 15.4,6 12,6M13,19C13,17.7 13.4,16.4 14.2,15.4C13.5,15.2 12.8,15 12,15C10.7,15 9.4,15.5 8.4,16.2L12,21L13,19.6C13,19.4 13,19.2 13,19M16.8,13.4C17.1,13.3 17.5,13.2 17.9,13.1L19.2,11.4C17.2,9.9 14.7,9 12,9C9.3,9 6.8,9.9 4.8,11.4L6.6,13.8C8.1,12.7 10,12 12,12C13.8,12 15.4,12.5 16.8,13.4M16.5,22.6L17.2,19.8L15,17.9L17.9,17.7L19,15L20.1,17.6L23,17.8L20.8,19.7L21.5,22.5L19,21.1L16.5,22.6Z"
  }));
};

WifiStarIcon.displayName = 'WifiStarIcon';
WifiStarIcon.defaultProps = {
  size: 24
};
var _default = WifiStarIcon;
exports["default"] = _default;