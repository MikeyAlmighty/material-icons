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

var OnedriveIcon = function OnedriveIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.08,13.64C21.17,13.81 22,14.75 22,15.89C22,16.78 21.5,17.55 20.75,17.92L20.58,18H9.18L9.16,18V18C7.71,18 6.54,16.81 6.54,15.36C6.54,13.9 7.72,12.72 9.18,12.72L9.4,12.73L9.39,12.53C9.39,10.71 10.87,9.23 12.69,9.23C13.97,9.23 15.08,9.96 15.63,11C16.08,10.73 16.62,10.55 17.21,10.55C18.8,10.55 20.09,11.84 20.09,13.43L20.08,13.64M8.82,12.16C7.21,12.34 5.96,13.7 5.96,15.36C5.96,16.04 6.17,16.66 6.5,17.18H4.73C3.22,17.18 2,15.96 2,14.45C2,13 3.12,11.83 4.53,11.73L4.46,11.06C4.46,9.36 5.84,8 7.54,8C8.17,8 8.77,8.18 9.26,8.5C9.95,7.11 11.4,6.15 13.07,6.15C15.27,6.15 17.08,7.83 17.3,9.97H17.21C16.73,9.97 16.27,10.07 15.84,10.25C15.12,9.25 13.96,8.64 12.69,8.64C10.67,8.64 9,10.19 8.82,12.16Z"
  }));
};

OnedriveIcon.displayName = 'OnedriveIcon';
OnedriveIcon.defaultProps = {
  size: 24
};
var _default = OnedriveIcon;
exports["default"] = _default;