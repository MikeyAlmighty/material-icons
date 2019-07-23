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

var BolnisiCrossIcon = function BolnisiCrossIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,7L21.5,6.5C19.93,8 18.47,9.4 16.93,10.18C15.5,10.91 14.44,10.91 13,11C13.09,9.56 13.09,8.5 13.82,7.07C14.6,5.53 16,4.07 17.5,2.5L17,2C15.32,3.23 13.64,3.83 12,3.83C10.36,3.83 8.68,3.23 7,2L6.5,2.5C8,4.07 9.4,5.53 10.18,7.07C10.91,8.5 10.91,9.56 11,11C9.56,10.91 8.5,10.91 7.07,10.18C5.53,9.4 4.06,8 2.5,6.5L2,7C3.23,8.68 3.83,10.36 3.83,12C3.83,13.64 3.23,15.32 2,17L2.5,17.5C4.07,16 5.53,14.6 7.07,13.82C8.5,13.09 9.56,13.09 11,13C10.91,14.44 10.91,15.5 10.18,16.93C9.4,18.47 8,19.93 6.5,21.5L7,22C8.68,20.77 10.36,20.17 12,20.17C13.64,20.17 15.32,20.77 17,22L17.5,21.5C16,19.93 14.6,18.47 13.82,16.93C13.09,15.5 13.09,14.44 13,13C14.44,13.09 15.5,13.09 16.93,13.82C18.47,14.6 19.93,16 21.5,17.5L22,17C20.77,15.32 20.17,13.64 20.17,12C20.17,10.36 20.77,8.68 22,7Z"
  }));
};

BolnisiCrossIcon.displayName = 'BolnisiCrossIcon';
BolnisiCrossIcon.defaultProps = {
  size: 24
};
var _default = BolnisiCrossIcon;
exports["default"] = _default;