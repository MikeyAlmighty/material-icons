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

var CordovaIcon = function CordovaIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.18,21.55H16.94L17.17,18.82H15.58L15.35,21.55H8.65L8.42,18.82H6.83L7.06,21.55H3.82L2,9.73L6.55,2.45H17.45L22,9.73L20.18,21.55M16.55,6.09H13.62L13.82,7.45H10.18L10.38,6.09H7.45L5.64,9.73L6.55,17H17.45L18.36,9.73L16.55,6.09M14.95,14.59C14.7,14.59 14.5,13.83 14.5,12.9C14.5,11.96 14.7,11.2 14.95,11.2C15.21,11.2 15.41,11.96 15.41,12.9C15.41,13.83 15.21,14.59 14.95,14.59M9.22,14.73C8.96,14.73 8.76,13.97 8.76,13.04C8.76,12.1 8.96,11.35 9.22,11.35C9.47,11.35 9.67,12.1 9.67,13.04C9.67,13.97 9.47,14.73 9.22,14.73Z"
  }));
};

CordovaIcon.displayName = 'CordovaIcon';
CordovaIcon.defaultProps = {
  size: 24
};
var _default = CordovaIcon;
exports["default"] = _default;