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

var HdrOffIcon = function HdrOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.5,15V13H18.6L19.5,15H21L20.1,12.9C20.6,12.7 21,12.1 21,11.5V10.5C21,9.7 20.3,9 19.5,9H16V13.9L17.1,15H17.5M17.5,10.5H19.5V11.5H17.5V10.5M13,10.5V10.9L14.5,12.4V10.5C14.5,9.7 13.8,9 13,9H11.1L12.6,10.5H13M9.5,9.5L2.5,2.5L1.4,3.5L6.9,9H6.5V11H4.5V9H3V15H4.5V12.5H6.5V15H8V10.1L9.5,11.6V15H12.9L20.5,22.6L21.6,21.5L9.5,9.5Z"
  }));
};

HdrOffIcon.displayName = 'HdrOffIcon';
HdrOffIcon.defaultProps = {
  size: 24
};
var _default = HdrOffIcon;
exports["default"] = _default;