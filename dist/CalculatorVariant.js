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

var CalculatorVariantIcon = function CalculatorVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9,2H4C2.9,2 2,2.9 2,4V9C2,10.1 2.9,11 4,11H9C10.1,11 11,10.1 11,9V4C11,2.9 10.1,2 9,2M9,7H4V6H9V7M20,13H15C13.9,13 13,13.9 13,15V20C13,21.1 13.9,22 15,22H20C21.1,22 22,21.1 22,20V15C22,13.9 21.1,13 20,13M20,19H15V18H20V19M20,17H15V16H20V17M20,2H15C13.9,2 13,2.9 13,4V9C13,10.1 13.9,11 15,11H20C21.1,11 22,10.1 22,9V4C22,2.9 21.1,2 20,2M20,7H18V9H17V7H15V6H17V4H18V6H20V7M9,13H4C2.9,13 2,13.9 2,15V20C2,21.1 2.9,22 4,22H9C10.1,22 11,21.1 11,20V15C11,13.9 10.1,13 9,13M8.62,18.91L7.91,19.62L6.5,18.21L5.09,19.62L4.38,18.91L5.79,17.5L4.38,16.09L5.09,15.38L6.5,16.79L7.91,15.38L8.62,16.09L7.21,17.5L8.62,18.91Z"
  }));
};

CalculatorVariantIcon.displayName = 'CalculatorVariantIcon';
CalculatorVariantIcon.defaultProps = {
  size: 24
};
var _default = CalculatorVariantIcon;
exports["default"] = _default;