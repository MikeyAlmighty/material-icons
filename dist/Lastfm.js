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

var LastfmIcon = function LastfmIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18,17.93C15.92,17.92 14.81,16.9 14.04,15.09L13.82,14.6L11.92,10.23C11.29,8.69 9.72,7.64 7.96,7.64C5.57,7.64 3.63,9.59 3.63,12C3.63,14.41 5.57,16.36 7.96,16.36C9.62,16.36 11.08,15.41 11.8,14L12.57,15.81C11.5,17.15 9.82,18 7.96,18C4.67,18 2,15.32 2,12C2,8.69 4.67,6 7.96,6C10.44,6 12.45,7.34 13.47,9.7C13.54,9.89 14.54,12.24 15.42,14.24C15.96,15.5 16.42,16.31 17.91,16.36C19.38,16.41 20.39,15.5 20.39,14.37C20.39,13.26 19.62,13 18.32,12.56C16,11.79 14.79,11 14.79,9.15C14.79,7.33 16,6.12 18,6.12C19.31,6.12 20.24,6.7 20.89,7.86L19.62,8.5C19.14,7.84 18.61,7.57 17.94,7.57C17,7.57 16.33,8.23 16.33,9.1C16.33,10.34 17.43,10.53 18.97,11.03C21.04,11.71 22,12.5 22,14.42C22,16.45 20.27,17.93 18,17.93Z"
  }));
};

LastfmIcon.displayName = 'LastfmIcon';
LastfmIcon.defaultProps = {
  size: 24
};
var _default = LastfmIcon;
exports["default"] = _default;