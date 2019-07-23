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

var MarkerCancelIcon = function MarkerCancelIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,14.5C16.94,14.5 16.42,14.65 16,14.92L20.08,19C20.35,18.58 20.5,18.06 20.5,17.5C20.5,15.84 19.16,14.5 17.5,14.5M14.5,17.5C14.5,19.16 15.84,20.5 17.5,20.5C18.06,20.5 18.58,20.35 19,20.08L14.92,16C14.65,16.42 14.5,16.94 14.5,17.5M18.5,1.15C19,1.15 19.5,1.34 19.89,1.73L22.73,4.56C23.5,5.35 23.5,6.61 22.73,7.39L18.95,11.16C18.5,11.06 18,11 17.5,11C16.67,11 15.88,11.16 15.15,11.44L11.26,7.55L17.07,1.73C17.46,1.34 17.97,1.15 18.5,1.15M10.3,8.5L13.89,12.1C12.15,13.26 11,15.25 11,17.5C11,18 11.06,18.5 11.16,18.95L10,20.12C9.22,20.89 7.97,20.9 7.19,20.14L6.33,21H0.67L4.36,17.31C3.56,16.5 3.56,15.24 4.34,14.46L10.3,8.5Z"
  }));
};

MarkerCancelIcon.displayName = 'MarkerCancelIcon';
MarkerCancelIcon.defaultProps = {
  size: 24
};
var _default = MarkerCancelIcon;
exports["default"] = _default;