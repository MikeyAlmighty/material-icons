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

var SnapchatIcon = function SnapchatIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,20.45C10.81,20.45 10.1,19.94 9.47,19.5C9,19.18 8.58,18.87 8.08,18.79C6.93,18.73 6.59,18.79 5.97,18.9C5.86,18.9 5.73,18.87 5.68,18.69C5.5,17.94 5.45,17.73 5.32,17.71C4,17.5 3.19,17.2 3.03,16.83C3,16.6 3.07,16.5 3.18,16.5C4.25,16.31 5.2,15.75 6,14.81C6.63,14.09 6.93,13.39 6.96,13.32C7.12,13 7.15,12.72 7.06,12.5C6.89,12.09 6.31,11.91 5.68,11.7C5.34,11.57 4.79,11.29 4.86,10.9C4.92,10.62 5.29,10.42 5.81,10.46C6.16,10.62 6.46,10.7 6.73,10.7C7.06,10.7 7.21,10.58 7.25,10.54C7.14,8.78 7.05,7.25 7.44,6.38C8.61,3.76 11.08,3.55 12,3.55C12.92,3.55 15.39,3.76 16.56,6.38C16.95,7.25 16.86,8.78 16.75,10.54C16.79,10.58 16.94,10.7 17.27,10.7C17.54,10.7 17.84,10.62 18.19,10.46C18.71,10.42 19.08,10.62 19.14,10.9C19.21,11.29 18.66,11.57 18.32,11.7C17.69,11.91 17.11,12.09 16.94,12.5C16.85,12.72 16.88,13 17.04,13.32C17.07,13.39 17.37,14.09 18,14.81C18.8,15.75 19.75,16.31 20.82,16.5C20.93,16.5 21,16.6 20.97,16.83C20.81,17.2 20,17.5 18.68,17.71C18.55,17.73 18.5,17.94 18.32,18.69C18.27,18.87 18.14,18.9 18.03,18.9C17.41,18.79 17.07,18.73 15.92,18.79C15.42,18.87 15,19.18 14.53,19.5C13.9,19.94 13.19,20.45 12,20.45Z"
  }));
};

SnapchatIcon.displayName = 'SnapchatIcon';
SnapchatIcon.defaultProps = {
  size: 24
};
var _default = SnapchatIcon;
exports["default"] = _default;