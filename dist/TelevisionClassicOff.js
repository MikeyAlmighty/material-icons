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

var TelevisionClassicOffIcon = function TelevisionClassicOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,5.27L3.28,4L21,21.72L19.73,23L17.73,21H4C2.89,21 2,20.11 2,19V9C2,8 2.76,7.14 3.75,7L2,5.27M8.16,3L12,6.84L15.84,3L17.25,4.41L14.66,7H20C21.11,7 22,7.89 22,9V19C22,19.34 21.92,19.66 21.77,19.94L17,15.18V9H10.82L8.82,7H9.34L6.75,4.41L8.16,3M4,9V19H15.73L5.73,9H4M19.5,9C18.95,9 18.5,9.45 18.5,10C18.5,10.55 18.95,11 19.5,11C20.05,11 20.5,10.55 20.5,10C20.5,9.45 20.05,9 19.5,9M19.5,12C18.95,12 18.5,12.45 18.5,13C18.5,13.55 18.95,14 19.5,14C20.05,14 20.5,13.55 20.5,13C20.5,12.45 20.05,12 19.5,12Z"
  }));
};

TelevisionClassicOffIcon.displayName = 'TelevisionClassicOffIcon';
TelevisionClassicOffIcon.defaultProps = {
  size: 24
};
var _default = TelevisionClassicOffIcon;
exports["default"] = _default;