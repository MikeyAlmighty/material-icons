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

var CartArrowRightIcon = function CartArrowRightIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9,20C9,21.1 8.1,22 7,22C5.9,22 5,21.1 5,20C5,18.9 5.9,18 7,18C8.1,18 9,18.9 9,20M17,18C15.9,18 15,18.9 15,20C15,21.1 15.9,22 17,22C18.1,22 19,21.1 19,20C19,18.9 18.1,18 17,18M7.2,14.63C7.19,14.67 7.19,14.71 7.2,14.75C7.2,14.89 7.31,15 7.45,15H19V17H7C5.9,17 5,16.1 5,15C5,14.65 5.07,14.31 5.24,14L6.6,11.59L3,4H1V2H4.27L5.21,4H20C20.55,4 21,4.45 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,12C16.94,12.62 16.27,13 15.55,13H8.1L7.2,14.63M9,9.5H13V11.5L16,8.5L13,5.5V7.5H9V9.5Z"
  }));
};

CartArrowRightIcon.displayName = 'CartArrowRightIcon';
CartArrowRightIcon.defaultProps = {
  size: 24
};
var _default = CartArrowRightIcon;
exports["default"] = _default;