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

var SoccerFieldIcon = function SoccerFieldIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4,4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.89 21.1,4 20,4H4M4,6H11V8.13C9.24,8.59 8,10.18 8,12C8,13.82 9.24,15.41 11,15.87V18H4V16H7V8H4V6M13,6H20V8H17V16H20V18H13V15.87C14.76,15.41 16,13.82 16,12C16,10.18 14.76,8.59 13,8.13V6M4,10H5V14H4V10M19,10H20V14H19V10M13,10.27C13.62,10.63 14,11.29 14,12C14,12.71 13.62,13.37 13,13.73V10.27M11,10.27V13.73C10.38,13.37 10,12.71 10,12C10,11.29 10.38,10.63 11,10.27Z"
  }));
};

SoccerFieldIcon.displayName = 'SoccerFieldIcon';
SoccerFieldIcon.defaultProps = {
  size: 24
};
var _default = SoccerFieldIcon;
exports["default"] = _default;