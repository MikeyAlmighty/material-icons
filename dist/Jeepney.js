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

var JeepneyIcon = function JeepneyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,13V7H20V4H4V7H5V13H2C2,13.93 2.5,14.71 3.5,14.93V20C3.5,20.55 3.95,21 4.5,21H5.5C6.05,21 6.5,20.55 6.5,20V19H17.5V20C17.5,20.55 17.95,21 18.5,21H19.5C20.05,21 20.5,20.55 20.5,20V14.93C21.5,14.7 22,13.93 22,13H19M8,15C7.17,15 6.5,14.33 6.5,13.5C6.5,12.67 7.17,12 8,12C8.83,12 9.5,12.67 9.5,13.5C9.5,14.33 8.83,15 8,15M16,15C15.17,15 14.5,14.33 14.5,13.5C14.5,12.67 15.17,12 16,12C16.83,12 17.5,12.67 17.5,13.5C17.5,14.33 16.83,15 16,15M17.5,10.5C15.92,10.18 14.03,10 12,10C9.97,10 8,10.18 6.5,10.5V7H17.5V10.5Z"
  }));
};

JeepneyIcon.displayName = 'JeepneyIcon';
JeepneyIcon.defaultProps = {
  size: 24
};
var _default = JeepneyIcon;
exports["default"] = _default;