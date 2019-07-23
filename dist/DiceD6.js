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

var DiceD6Icon = function DiceD6Icon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M5,5V19H19V5H5M13.39,9.53C10.89,9.5 10.86,11.53 10.86,11.53C10.86,11.53 11.41,10.87 12.53,10.87C13.19,10.87 14.5,11.45 14.55,13.41C14.61,15.47 12.77,16 12.77,16C12.77,16 9.27,16.86 9.3,12.66C9.33,7.94 13.39,8.33 13.39,8.33V9.53M11.95,12.1C11.21,12 10.83,12.78 10.83,12.78L10.85,13.5C10.85,14.27 11.39,14.83 12,14.83C12.61,14.83 13.05,14.27 13.05,13.5C13.05,12.73 12.56,12.1 11.95,12.1Z"
  }));
};

DiceD6Icon.displayName = 'DiceD6Icon';
DiceD6Icon.defaultProps = {
  size: 24
};
var _default = DiceD6Icon;
exports["default"] = _default;