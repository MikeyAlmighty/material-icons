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

var BoomGateIcon = function BoomGateIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,9H8.22C7.11,7.77 5.21,7.68 4,8.8C3.36,9.36 3,10.16 3,11V20C2.45,20 2,20.45 2,21V22H10V21C10,20.45 9.55,20 9,20V13H20C21.1,13 22,12.1 22,11C22,9.9 21.1,9 20,9M6,12.5C5.17,12.5 4.5,11.83 4.5,11C4.5,10.17 5.17,9.5 6,9.5C6.83,9.5 7.5,10.17 7.5,11C7.5,11.83 6.83,12.5 6,12.5M10.5,12L9,10H10.5L12,12H10.5M14.5,12L13,10H14.5L16,12H14.5M18.5,12L17,10H18.5L20,12H18.5Z"
  }));
};

BoomGateIcon.displayName = 'BoomGateIcon';
BoomGateIcon.defaultProps = {
  size: 24
};
var _default = BoomGateIcon;
exports["default"] = _default;