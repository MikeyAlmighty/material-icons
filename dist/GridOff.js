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

var GridOffIcon = function GridOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M0,2.77L1.28,1.5L22.5,22.72L21.23,24L19.23,22H4C2.92,22 2,21.1 2,20V4.77L0,2.77M10,4V7.68L8,5.68V4H6.32L4.32,2H20C21.1,2 22,2.9 22,4V19.7L20,17.7V16H18.32L16.32,14H20V10H16V13.68L14,11.68V10H12.32L10.32,8H14V4H10M16,4V8H20V4H16M16,20H17.23L16,18.77V20M4,8H5.23L4,6.77V8M10,14H11.23L10,12.77V14M14,20V16.77L13.23,16H10V20H14M8,20V16H4V20H8M8,14V10.77L7.23,10H4V14H8Z"
  }));
};

GridOffIcon.displayName = 'GridOffIcon';
GridOffIcon.defaultProps = {
  size: 24
};
var _default = GridOffIcon;
exports["default"] = _default;