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

var WaterPumpIcon = function WaterPumpIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,14.5C19,14.5 21,16.67 21,18C21,19.1 20.1,20 19,20C17.9,20 17,19.1 17,18C17,16.67 19,14.5 19,14.5M5,18V9C3.9,9 3,8.1 3,7C3,5.9 3.9,5 5,5V4C5,2.9 5.9,2 7,2H9C10.1,2 11,2.9 11,4V5H19C20.1,5 21,5.9 21,7V9L21,11C21.55,11 22,11.45 22,12C22,12.55 21.55,13 21,13H17C16.45,13 16,12.55 16,12C16,11.45 16.45,11 17,11V9H11V18H12C13.1,18 14,18.9 14,20V22H2V20C2,18.9 2.9,18 4,18H5Z"
  }));
};

WaterPumpIcon.displayName = 'WaterPumpIcon';
WaterPumpIcon.defaultProps = {
  size: 24
};
var _default = WaterPumpIcon;
exports["default"] = _default;