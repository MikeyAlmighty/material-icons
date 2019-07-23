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

var CardBulletedOffOutlineIcon = function CardBulletedOffOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.59,20.87L19.17,22.29L16.88,20H4C2.9,20 2,19.1 2,18V6C2,5.74 2.05,5.5 2.14,5.26L1.17,4.29L2.59,2.87L3.73,4L20.59,20.87V20.87M6.54,4H20C21.1,4 22,4.9 22,6V18C22,18.41 21.87,18.8 21.66,19.12L20,17.46V6H8.54L6.54,4M4,18H14.88L11.88,15H10V13.12L7.88,11H6V9.12L4,7.12V18M18,15H17.54L15.54,13H18V15M18,11H13.54L11.54,9H18V11Z"
  }));
};

CardBulletedOffOutlineIcon.displayName = 'CardBulletedOffOutlineIcon';
CardBulletedOffOutlineIcon.defaultProps = {
  size: 24
};
var _default = CardBulletedOffOutlineIcon;
exports["default"] = _default;