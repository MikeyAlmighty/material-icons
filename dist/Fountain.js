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

var FountainIcon = function FountainIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.5,2C4.47,2 2,4.46 2,7.5V7.5L2,8H4V7.5C4,5.57 5.57,4 7.5,4C9,4 10.26,4.93 10.76,6.24C10.37,6.08 9.95,6 9.5,6C8.11,6 6.9,6.82 6.34,8L8.08,9C8.29,8.42 8.85,8 9.5,8C10.33,8 11,8.67 11,9.5V11H13V9.5C13,8.67 13.67,8 14.5,8C15.16,8 15.71,8.42 15.92,9L17.66,8C17.1,6.82 15.9,6 14.5,6C14.05,6 13.63,6.08 13.24,6.24C13.74,4.93 15,4 16.5,4C18.43,4 20,5.57 20,7.5V8H22V7.5H22C22,4.46 19.54,2 16.5,2C14.64,2 13,2.93 12,4.34C11,2.93 9.36,2 7.5,2M6,12V14H7.42C7.92,15.15 8.85,16.07 10,16.57C10,17.38 10,18.19 10,19H2C2,19 2.82,20.23 3.41,21.11C3.78,21.67 4.4,22 5.07,22H18.93C19.6,22 20.22,21.67 20.59,21.11L22,19H14C14,18.19 14,17.38 14,16.57C15.15,16.07 16.08,15.15 16.58,14H18V12H6Z"
  }));
};

FountainIcon.displayName = 'FountainIcon';
FountainIcon.defaultProps = {
  size: 24
};
var _default = FountainIcon;
exports["default"] = _default;