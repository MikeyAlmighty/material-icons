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

var SlackIcon = function SlackIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,15C6,16.1 5.1,17 4,17C2.9,17 2,16.1 2,15C2,13.9 2.9,13 4,13H6V15M7,15C7,13.9 7.9,13 9,13C10.1,13 11,13.9 11,15V20C11,21.1 10.1,22 9,22C7.9,22 7,21.1 7,20V15M9,7C7.9,7 7,6.1 7,5C7,3.9 7.9,3 9,3C10.1,3 11,3.9 11,5V7H9M9,8C10.1,8 11,8.9 11,10C11,11.1 10.1,12 9,12H4C2.9,12 2,11.1 2,10C2,8.9 2.9,8 4,8H9M17,10C17,8.9 17.9,8 19,8C20.1,8 21,8.9 21,10C21,11.1 20.1,12 19,12H17V10M16,10C16,11.1 15.1,12 14,12C12.9,12 12,11.1 12,10V5C12,3.9 12.9,3 14,3C15.1,3 16,3.9 16,5V10M14,18C15.1,18 16,18.9 16,20C16,21.1 15.1,22 14,22C12.9,22 12,21.1 12,20V18H14M14,17C12.9,17 12,16.1 12,15C12,13.9 12.9,13 14,13H19C20.1,13 21,13.9 21,15C21,16.1 20.1,17 19,17H14Z"
  }));
};

SlackIcon.displayName = 'SlackIcon';
SlackIcon.defaultProps = {
  size: 24
};
var _default = SlackIcon;
exports["default"] = _default;