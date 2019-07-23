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

var DiceD12Icon = function DiceD12Icon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2L1.5,9.64L5.5,22H18.5L22.5,9.64L12,2M17,20H7L3.85,10.4L12,4.47L20.15,10.4L17,20M17,15.75V17H11.66V15.91C11.66,15.91 15.23,12.45 15.23,11.4C15.23,10.12 14.18,10.25 14.18,10.25C13.5,10.3 13,10.87 13,11.55H11.44C11.5,10.09 12.72,8.94 14.27,9C16.74,9 16.77,10.85 16.77,11.3C16.77,13.07 13.58,15.77 13.58,15.77L17,15.75M10.5,17H8.89V10.89L7,11.47V10.19L10.31,9H10.5V17Z"
  }));
};

DiceD12Icon.displayName = 'DiceD12Icon';
DiceD12Icon.defaultProps = {
  size: 24
};
var _default = DiceD12Icon;
exports["default"] = _default;