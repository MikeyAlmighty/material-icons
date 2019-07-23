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

var FerryIcon = function FerryIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,6H18V9.96L12,8L6,9.96M3.94,19H4C5.6,19 7,18.12 8,17C9,18.12 10.4,19 12,19C13.6,19 15,18.12 16,17C17,18.12 18.4,19 20,19H20.05L21.95,12.31C22.03,12.06 22,11.78 21.89,11.54C21.76,11.3 21.55,11.12 21.29,11.04L20,10.62V6C20,4.89 19.1,4 18,4H15V1H9V4H6C4.9,4 4,4.9 4,6V10.62L2.71,11.04C2.45,11.12 2.24,11.3 2.11,11.54C2,11.78 1.97,12.06 2.05,12.31M20,21C18.61,21 17.22,20.53 16,19.67C13.56,21.38 10.44,21.38 8,19.67C6.78,20.53 5.39,21 4,21H2V23H4C5.37,23 6.74,22.65 8,22C10.5,23.3 13.5,23.3 16,22C17.26,22.65 18.62,23 20,23H22V21H20Z"
  }));
};

FerryIcon.displayName = 'FerryIcon';
FerryIcon.defaultProps = {
  size: 24
};
var _default = FerryIcon;
exports["default"] = _default;