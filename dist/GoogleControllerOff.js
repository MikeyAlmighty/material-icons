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

var GoogleControllerOffIcon = function GoogleControllerOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,5.27L3.28,4L20,20.72L18.73,22L12.73,16H7.97L5,19C4.67,19.3 4.23,19.5 3.75,19.5C2.78,19.5 2,18.72 2,17.75V17.5L3,10.12C3.1,9.09 3.53,8.17 4.19,7.46L2,5.27M5,10V11H7V13H8V11.27L6.73,10H5M16.5,6C18.86,6 20.79,7.81 21,10.12L22,17.5V17.75C22,18.41 21.64,19 21.1,19.28L7.82,6H16.5M16.5,8C16.09,8 15.75,8.34 15.75,8.75C15.75,9.16 16.09,9.5 16.5,9.5C16.91,9.5 17.25,9.16 17.25,8.75C17.25,8.34 16.91,8 16.5,8M14.75,9.75C14.34,9.75 14,10.09 14,10.5C14,10.91 14.34,11.25 14.75,11.25C15.16,11.25 15.5,10.91 15.5,10.5C15.5,10.09 15.16,9.75 14.75,9.75M18.25,9.75C17.84,9.75 17.5,10.09 17.5,10.5C17.5,10.91 17.84,11.25 18.25,11.25C18.66,11.25 19,10.91 19,10.5C19,10.09 18.66,9.75 18.25,9.75M16.5,11.5C16.09,11.5 15.75,11.84 15.75,12.25C15.75,12.66 16.09,13 16.5,13C16.91,13 17.25,12.66 17.25,12.25C17.25,11.84 16.91,11.5 16.5,11.5Z"
  }));
};

GoogleControllerOffIcon.displayName = 'GoogleControllerOffIcon';
GoogleControllerOffIcon.defaultProps = {
  size: 24
};
var _default = GoogleControllerOffIcon;
exports["default"] = _default;