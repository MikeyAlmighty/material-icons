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

var GuyFawkesMaskIcon = function GuyFawkesMaskIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21,13C21,17.97 16.97,22 12,22C7.03,22 3,17.97 3,13L3.03,4.43C5.68,2.88 8.76,2 12.05,2C15.3,2 18.36,2.87 21,4.38V13M13,19.93C16.39,19.44 19,16.5 19,13V5.59C16.9,4.57 14.54,4 12.05,4C9.5,4 7.08,4.6 4.94,5.66L5,13C5,16.5 7.63,19.44 11,19.93V18H13V19.93M11,16H8L6,13L9,14H10L11,13H13L14,14H15L18,13L16,16H13L12,15L11,16M6,9.03C6.64,8.4 7.5,8.05 8.5,8.05C9.45,8.05 10.34,8.4 11,9.03C10.34,9.65 9.45,10 8.5,10C7.5,10 6.64,9.65 6,9.03M13,9.03C13.64,8.4 14.5,8.05 15.5,8.05C16.45,8.05 17.34,8.4 18,9.03C17.34,9.65 16.45,10 15.5,10C14.5,10 13.64,9.65 13,9.03Z"
  }));
};

GuyFawkesMaskIcon.displayName = 'GuyFawkesMaskIcon';
GuyFawkesMaskIcon.defaultProps = {
  size: 24
};
var _default = GuyFawkesMaskIcon;
exports["default"] = _default;