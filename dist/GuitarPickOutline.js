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

var GuitarPickOutlineIcon = function GuitarPickOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,4.1C18.1,3.3 17,2.8 15.8,2.5C15.5,2.4 13.6,2 12.2,2C12.2,2 12.1,2 12,2C12,2 11.9,2 11.8,2C10.4,2 8.4,2.4 8.1,2.5C7,2.8 5.9,3.3 5,4.1C3,5.9 3,8.7 4,11C5,13.5 6.1,15.7 7.6,17.9C8.8,19.6 10.1,22 12,22C13.9,22 15.2,19.6 16.5,17.9C18,15.8 19.1,13.5 20.1,11C21,8.7 21,5.9 19,4.1M18.2,10.2C17.1,12.9 16.1,14.9 14.8,16.7C14.6,16.9 14.5,17.2 14.3,17.4C13.8,18.2 12.6,20 12,20C12,20 12,20 12,20C11.3,20 10.2,18.3 9.6,17.4C9.4,17.2 9.3,16.9 9.1,16.7C7.9,14.9 6.8,12.9 5.7,10.2C5.5,9.5 4.7,7 6.3,5.5C6.8,5 7.6,4.7 8.6,4.4C9,4.4 10.7,4 11.8,4C11.8,4 12.1,4 12.1,4C13.2,4 14.9,4.3 15.3,4.4C16.3,4.7 17.1,5 17.6,5.5C19.3,7 18.5,9.5 18.2,10.2Z"
  }));
};

GuitarPickOutlineIcon.displayName = 'GuitarPickOutlineIcon';
GuitarPickOutlineIcon.defaultProps = {
  size: 24
};
var _default = GuitarPickOutlineIcon;
exports["default"] = _default;