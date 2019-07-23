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

var TowingIcon = function TowingIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,10H20.39L17.06,6H15V10M17.5,18.5C17.89,18.5 18.24,18.37 18.54,18.07C18.84,17.77 19,17.42 19,17C19,16.61 18.84,16.26 18.54,15.96C18.24,15.66 17.89,15.5 17.5,15.5C17.08,15.5 16.73,15.66 16.43,15.96C16.13,16.26 16,16.61 16,17C16,17.42 16.13,17.77 16.43,18.07C16.73,18.37 17.08,18.5 17.5,18.5M6,18.5C6.44,18.5 6.8,18.37 7.08,18.07C7.36,17.77 7.5,17.42 7.5,17C7.5,16.61 7.36,16.26 7.08,15.96C6.8,15.66 6.44,15.5 6,15.5C5.56,15.5 5.2,15.66 4.92,15.96C4.64,16.26 4.5,16.61 4.5,17C4.5,17.42 4.64,17.77 4.92,18.07C5.2,18.37 5.56,18.5 6,18.5M18,4L23,10V17H20.5C20.5,17.83 20.19,18.53 19.59,19.13C19,19.72 18.3,20 17.5,20C16.67,20 15.97,19.72 15.38,19.13C14.78,18.53 14.5,17.83 14.5,17H9C9,17.83 8.7,18.53 8.11,19.13C7.5,19.72 6.81,20 6,20C5.19,20 4.5,19.72 3.89,19.13C3.3,18.53 3,17.83 3,17H1V13H9.19L3,8.11V11H1V5H2L13,11.06V4H18Z"
  }));
};

TowingIcon.displayName = 'TowingIcon';
TowingIcon.defaultProps = {
  size: 24
};
var _default = TowingIcon;
exports["default"] = _default;