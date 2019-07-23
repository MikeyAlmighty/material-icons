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

var RouterWirelessSettingsIcon = function RouterWirelessSettingsIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.2,4.9C19,3.8 17.5,3.2 16,3.2C14.5,3.2 13,3.8 11.8,4.9L11,4.1C12.4,2.7 14.2,2 16,2C17.8,2 19.6,2.7 21,4.1L20.2,4.9M19.3,5.7L18.5,6.5C17.8,5.8 16.9,5.5 16,5.5C15.1,5.5 14.2,5.8 13.5,6.5L12.7,5.7C13.6,4.8 14.8,4.3 16,4.3C17.2,4.3 18.4,4.8 19.3,5.7M19,12C20.1,12 21,12.9 21,14V18C21,19.1 20.1,20 19,20H5C3.9,20 3,19.1 3,18V14C3,12.9 3.9,12 5,12H15V8H17V12H19M8,17V15H6V17H8M11.5,17V15H9.5V17H11.5M15,17V15H13V17H15M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z"
  }));
};

RouterWirelessSettingsIcon.displayName = 'RouterWirelessSettingsIcon';
RouterWirelessSettingsIcon.defaultProps = {
  size: 24
};
var _default = RouterWirelessSettingsIcon;
exports["default"] = _default;