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

var TruckCheckIcon = function TruckCheckIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,4H17V8H20L23,12V17H21C21,18.66 19.66,20 18,20C16.34,20 15,18.66 15,17H9C9,18.66 7.66,20 6,20C4.34,20 3,18.66 3,17H1V6C1,4.89 1.9,4 3,4M17,9.5V12H21.47L19.5,9.5H17M6,15.5C5.17,15.5 4.5,16.17 4.5,17C4.5,17.83 5.17,18.5 6,18.5C6.83,18.5 7.5,17.83 7.5,17C7.5,16.17 6.83,15.5 6,15.5M18,15.5C17.17,15.5 16.5,16.17 16.5,17C16.5,17.83 17.17,18.5 18,18.5C18.83,18.5 19.5,17.83 19.5,17C19.5,16.17 18.83,15.5 18,15.5M8,14L14,8L12.59,6.58L8,11.17L5.91,9.08L4.5,10.5L8,14Z"
  }));
};

TruckCheckIcon.displayName = 'TruckCheckIcon';
TruckCheckIcon.defaultProps = {
  size: 24
};
var _default = TruckCheckIcon;
exports["default"] = _default;