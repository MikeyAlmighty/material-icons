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

var CreditCardClockOutlineIcon = function CreditCardClockOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14M24,17C24,20.87 20.87,24 17,24C14.21,24 11.8,22.36 10.67,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H20C21.1,4 22,4.9 22,6V12.1C23.24,13.36 24,15.09 24,17M10,17C10,15.04 10.81,13.27 12.1,12H4V18H10.07C10,17.67 10,17.34 10,17M17,12C14.24,12 12,14.24 12,17C12,19.76 14.24,22 17,22C19.76,22 22,19.76 22,17C22,14.24 19.76,12 17,12M20,8V6H4V8H20Z"
  }));
};

CreditCardClockOutlineIcon.displayName = 'CreditCardClockOutlineIcon';
CreditCardClockOutlineIcon.defaultProps = {
  size: 24
};
var _default = CreditCardClockOutlineIcon;
exports["default"] = _default;