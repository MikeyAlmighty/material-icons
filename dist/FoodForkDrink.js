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

var FoodForkDrinkIcon = function FoodForkDrinkIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,3C2.45,3 2,3.45 2,4V8L2,9.5C2,11.19 3.03,12.63 4.5,13.22V19.5C4.5,20.33 5.17,21 6,21C6.83,21 7.5,20.33 7.5,19.5V13.22C8.97,12.63 10,11.19 10,9.5V8L10,4C10,3.45 9.55,3 9,3C8.45,3 8,3.45 8,4V8C8,8.28 7.78,8.5 7.5,8.5C7.22,8.5 7,8.28 7,8V4C7,3.45 6.55,3 6,3C5.45,3 5,3.45 5,4V8C5,8.28 4.78,8.5 4.5,8.5C4.22,8.5 4,8.28 4,8V4C4,3.45 3.55,3 3,3M19.88,3C19.75,3 19.62,3.09 19.5,3.16L16,5.25V9H12V11H13L14,21H20L21,11H22V9H18V6.34L20.5,4.84C21,4.56 21.13,4 20.84,3.5C20.63,3.14 20.26,2.95 19.88,3Z"
  }));
};

FoodForkDrinkIcon.displayName = 'FoodForkDrinkIcon';
FoodForkDrinkIcon.defaultProps = {
  size: 24
};
var _default = FoodForkDrinkIcon;
exports["default"] = _default;