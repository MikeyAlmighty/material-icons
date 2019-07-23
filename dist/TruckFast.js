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

var TruckFastIcon = function TruckFastIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,13.5L2.25,12H7.5L6.9,10.5H2L1.25,9H9.05L8.45,7.5H1.11L0.25,6H4C4,4.9 4.9,4 6,4H18V8H21L24,12V17H22C22,18.66 20.66,20 19,20C17.34,20 16,18.66 16,17H12C12,18.66 10.66,20 9,20C7.34,20 6,18.66 6,17H4V13.5H3M19,18.5C19.83,18.5 20.5,17.83 20.5,17C20.5,16.17 19.83,15.5 19,15.5C18.17,15.5 17.5,16.17 17.5,17C17.5,17.83 18.17,18.5 19,18.5M20.5,9.5H18V12H22.46L20.5,9.5M9,18.5C9.83,18.5 10.5,17.83 10.5,17C10.5,16.17 9.83,15.5 9,15.5C8.17,15.5 7.5,16.17 7.5,17C7.5,17.83 8.17,18.5 9,18.5Z"
  }));
};

TruckFastIcon.displayName = 'TruckFastIcon';
TruckFastIcon.defaultProps = {
  size: 24
};
var _default = TruckFastIcon;
exports["default"] = _default;