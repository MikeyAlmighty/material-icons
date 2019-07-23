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

var BusDoubleDeckerIcon = function BusDoubleDeckerIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,4C1.89,4 1,4.89 1,6V17H3C3,18.66 4.34,20 6,20C7.66,20 9,18.66 9,17H15C15,18.66 16.34,20 18,20C19.66,20 21,18.66 21,17H23V14C23,12.89 22.11,12 21,12H19V9.5H23V6C23,4.89 22.11,4 21,4H3M2.5,5.5H6.5V8H2.5V5.5M8,5.5H12V8H8V5.5M13.5,5.5H17.5V8H13.5V5.5M19,5.5H21.5V8H19V5.5M13.5,9.5H17.5V12H13.5V9.5M2.5,9.5H6.5V12H2.5V9.5M8,9.5H12V12H8V9.5M6,15.5C6.83,15.5 7.5,16.17 7.5,17C7.5,17.83 6.83,18.5 6,18.5C5.17,18.5 4.5,17.83 4.5,17C4.5,16.17 5.17,15.5 6,15.5M18,15.5C18.83,15.5 19.5,16.17 19.5,17C19.5,17.83 18.83,18.5 18,18.5C17.17,18.5 16.5,17.83 16.5,17C16.5,16.17 17.17,15.5 18,15.5Z"
  }));
};

BusDoubleDeckerIcon.displayName = 'BusDoubleDeckerIcon';
BusDoubleDeckerIcon.defaultProps = {
  size: 24
};
var _default = BusDoubleDeckerIcon;
exports["default"] = _default;