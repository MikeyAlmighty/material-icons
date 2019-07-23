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

var CloudQuestionIcon = function CloudQuestionIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14C0,17.31 2.69,20 6,20H19C21.76,20 24,17.76 24,15C24,12.36 21.95,10.22 19.35,10.03M13,17H11V15H13V17M14.8,11.82C14.5,12.21 14.13,12.5 13.67,12.75C13.41,12.91 13.24,13.07 13.15,13.26C13.06,13.45 13,13.69 13,14H11C11,13.45 11.11,13.08 11.3,12.82C11.5,12.56 11.85,12.25 12.37,11.91C12.63,11.75 12.84,11.56 13,11.32C13.15,11.09 13.23,10.81 13.23,10.5C13.23,10.18 13.14,9.94 12.96,9.76C12.78,9.56 12.5,9.47 12.2,9.47C11.93,9.47 11.71,9.55 11.5,9.7C11.35,9.85 11.25,10.08 11.25,10.39H9.28C9.23,9.64 9.5,9 10.06,8.59C10.6,8.2 11.31,8 12.2,8C13.14,8 13.89,8.23 14.43,8.68C14.97,9.13 15.24,9.75 15.24,10.5C15.24,11 15.09,11.41 14.8,11.82Z"
  }));
};

CloudQuestionIcon.displayName = 'CloudQuestionIcon';
CloudQuestionIcon.defaultProps = {
  size: 24
};
var _default = CloudQuestionIcon;
exports["default"] = _default;