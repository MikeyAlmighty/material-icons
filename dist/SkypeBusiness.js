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

var SkypeBusinessIcon = function SkypeBusinessIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12.03,16.53C9.37,16.53 8.18,15.22 8.18,14.24C8.18,13.74 8.55,13.38 9.06,13.38C10.2,13.38 9.91,15 12.03,15C13.12,15 13.73,14.43 13.73,13.82C13.73,13.46 13.55,13.06 12.83,12.88L10.46,12.29C8.55,11.81 8.2,10.78 8.2,9.81C8.2,7.79 10.1,7.03 11.88,7.03C13.5,7.03 15.46,7.94 15.46,9.15C15.46,9.67 15,9.97 14.5,9.97C13.5,9.97 13.7,8.62 11.74,8.62C10.77,8.62 10.23,9.06 10.23,9.69C10.23,10.32 11,10.5 11.66,10.68L13.42,11.07C15.34,11.5 15.83,12.62 15.83,13.67C15.83,15.31 14.57,16.53 12.03,16.53M18,6C20.07,8.04 20.85,10.89 20.36,13.55C20.77,14.27 21,15.11 21,16C21,18.76 18.76,21 16,21C15.11,21 14.27,20.77 13.55,20.36C10.89,20.85 8.04,20.07 6,18C3.93,15.96 3.15,13.11 3.64,10.45C3.23,9.73 3,8.89 3,8C3,5.24 5.24,3 8,3C8.89,3 9.73,3.23 10.45,3.64C13.11,3.15 15.96,3.93 18,6M8,5C6.34,5 5,6.34 5,8C5,8.79 5.3,9.5 5.8,10.04C5.1,12.28 5.63,14.82 7.4,16.6C9.18,18.37 11.72,18.9 13.96,18.2C14.5,18.7 15.21,19 16,19C17.66,19 19,17.66 19,16C19,15.21 18.7,14.5 18.2,13.96C18.9,11.72 18.37,9.18 16.6,7.4C14.82,5.63 12.28,5.1 10.04,5.8C9.5,5.3 8.79,5 8,5Z"
  }));
};

SkypeBusinessIcon.displayName = 'SkypeBusinessIcon';
SkypeBusinessIcon.defaultProps = {
  size: 24
};
var _default = SkypeBusinessIcon;
exports["default"] = _default;