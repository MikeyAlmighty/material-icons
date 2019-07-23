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

var AxisZArrowLockIcon = function AxisZArrowLockIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21.8,5C22.4,5 23,5.6 23,6.3V9.8C23,10.4 22.4,11 21.7,11H16.2C15.6,11 15,10.4 15,9.7V6.2C15,5.6 15.6,5 16.2,5V3.5C16.2,2.1 17.6,1 19,1C20.4,1 21.8,2.1 21.8,3.5V5M20.5,5V3.5C20.5,2.7 19.8,2.2 19,2.2C18.2,2.2 17.5,2.7 17.5,3.5V5H20.5M10,2L14,6H11V13.82L20.39,19.25L19.39,21L10,15.56L3.17,19.5L2.17,17.77L9,13.82V6H6L10,2Z"
  }));
};

AxisZArrowLockIcon.displayName = 'AxisZArrowLockIcon';
AxisZArrowLockIcon.defaultProps = {
  size: 24
};
var _default = AxisZArrowLockIcon;
exports["default"] = _default;