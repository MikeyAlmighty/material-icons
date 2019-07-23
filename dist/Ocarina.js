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

var OcarinaIcon = function OcarinaIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,12C16.8,10.4 13.4,9.7 10.8,9.3L9.7,5.9C9.3,4.8 7.7,4.8 7.3,5.9L6.3,9C3.9,9.4 2,11.5 2,14C2,16.8 4.2,19 7,19C7,19 14,19 20,16C20,16 22,15 22,14C22,13 20,12 20,12M5,14C4.4,14 4,13.6 4,13C4,12.4 4.4,12 5,12C5.6,12 6,12.4 6,13C6,13.5 5.6,14 5,14M7,17C6.4,17 6,16.6 6,16C6,15.4 6.4,15 7,15C7.6,15 8,15.4 8,16C8,16.5 7.6,17 7,17M9,14C8.4,14 8,13.6 8,13C8,12.4 8.4,12 9,12C9.6,12 10,12.4 10,13C10,13.5 9.6,14 9,14M11,17C10.4,17 10,16.6 10,16C10,15.4 10.4,15 11,15C11.6,15 12,15.4 12,16C12,16.5 11.6,17 11,17M16,14C15.4,14 15,13.6 15,13C15,12.4 15.4,12 16,12C16.6,12 17,12.4 17,13C17,13.5 16.6,14 16,14M19,15C18.4,15 18,14.6 18,14C18,13.4 18.4,13 19,13C19.6,13 20,13.4 20,14C20,14.5 19.6,15 19,15Z"
  }));
};

OcarinaIcon.displayName = 'OcarinaIcon';
OcarinaIcon.defaultProps = {
  size: 24
};
var _default = OcarinaIcon;
exports["default"] = _default;