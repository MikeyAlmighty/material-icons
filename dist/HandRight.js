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

var HandRightIcon = function HandRightIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21,6.58V18.67C21,20.51 19.51,22 17.67,22H11.58C10.68,22 9.83,21.64 9.21,21L2.67,14.36C2.67,14.36 3.72,13.33 3.75,13.32C3.93,13.16 4.16,13.07 4.41,13.07C4.59,13.07 4.76,13.12 4.91,13.21C4.94,13.22 8.5,15.26 8.5,15.26V5.33C8.5,4.64 9.06,4.08 9.75,4.08C10.44,4.08 11,4.64 11,5.33V11.17H11.83V3.25C11.83,2.56 12.39,2 13.08,2C13.78,2 14.33,2.56 14.33,3.25V11.17H15.17V4.08C15.17,3.39 15.72,2.83 16.42,2.83C17.11,2.83 17.67,3.39 17.67,4.08V11.17H18.5V6.58C18.5,5.89 19.06,5.33 19.75,5.33C20.44,5.33 21,5.89 21,6.58Z"
  }));
};

HandRightIcon.displayName = 'HandRightIcon';
HandRightIcon.defaultProps = {
  size: 24
};
var _default = HandRightIcon;
exports["default"] = _default;