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

var LassoIcon = function LassoIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C17.5,2 22,5.13 22,9C22,12.26 18.81,15 14.5,15.78L14.5,15.5C14.5,14.91 14.4,14.34 14.21,13.81C17.55,13.21 20,11.28 20,9C20,6.24 16.42,4 12,4C7.58,4 4,6.24 4,9C4,10.19 4.67,11.29 5.79,12.15C5.35,12.64 5,13.21 4.78,13.85C3.06,12.59 2,10.88 2,9C2,5.13 6.5,2 12,2M9.5,12C11.43,12 13,13.57 13,15.5C13,17.4 11.5,18.95 9.6,19C9.39,19.36 9.18,20 9.83,20.68C11,21.88 13.28,19.72 16.39,19.71C18.43,19.7 20.03,19.97 20.03,19.97C20.03,19.97 21.08,20.1 20.97,21.04C20.86,21.97 19.91,21.97 19.91,21.97C19.53,21.93 18.03,21.58 16.22,21.68C14.41,21.77 13.47,22.41 12.56,22.69C11.66,22.97 9.91,23.38 8.3,22.05C6.97,20.96 7.46,19.11 7.67,18.5C6.67,17.87 6,16.76 6,15.5C6,13.57 7.57,12 9.5,12M9.5,14C8.67,14 8,14.67 8,15.5C8,16.33 8.67,17 9.5,17C10.33,17 11,16.33 11,15.5C11,14.67 10.33,14 9.5,14Z"
  }));
};

LassoIcon.displayName = 'LassoIcon';
LassoIcon.defaultProps = {
  size: 24
};
var _default = LassoIcon;
exports["default"] = _default;