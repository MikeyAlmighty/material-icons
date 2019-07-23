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

var EmoticonCoolIcon = function EmoticonCoolIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3.22,7.22C4.91,4.11 8.21,2 12,2C15.79,2 19.09,4.11 20.78,7.22L20,8H4L3.22,7.22M21.4,8.6C21.78,9.67 22,10.81 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,10.81 2.22,9.67 2.6,8.6L4,10H5C5,11.38 7.12,12.5 8.5,12.5C9.88,12.5 11.25,11.38 11.25,10H12.75C12.75,11.38 14.12,12.5 15.5,12.5C16.88,12.5 19,11.38 19,10H20L21.4,8.6M16.19,15.42L14.77,14C14.32,14.72 13.25,15.23 12,15.23C10.75,15.23 9.68,14.72 9.23,14L7.81,15.42C8.71,16.5 10.25,17.23 12,17.23C13.75,17.23 15.29,16.5 16.19,15.42Z"
  }));
};

EmoticonCoolIcon.displayName = 'EmoticonCoolIcon';
EmoticonCoolIcon.defaultProps = {
  size: 24
};
var _default = EmoticonCoolIcon;
exports["default"] = _default;