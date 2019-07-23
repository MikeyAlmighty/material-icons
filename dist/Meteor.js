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

var MeteorIcon = function MeteorIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2.8,3L19.67,18.82C19.67,18.82 20,19.27 19.58,19.71C19.17,20.15 18.63,19.77 18.63,19.77L2.8,3M7.81,4.59L20.91,16.64C20.91,16.64 21.23,17.08 20.82,17.5C20.4,17.97 19.86,17.59 19.86,17.59L7.81,4.59M4.29,8L17.39,20.03C17.39,20.03 17.71,20.47 17.3,20.91C16.88,21.36 16.34,21 16.34,21L4.29,8M12.05,5.96L21.2,14.37C21.2,14.37 21.42,14.68 21.13,15C20.85,15.3 20.47,15.03 20.47,15.03L12.05,5.96M5.45,11.91L14.6,20.33C14.6,20.33 14.82,20.64 14.54,20.95C14.25,21.26 13.87,21 13.87,21L5.45,11.91M16.38,7.92L20.55,11.74C20.55,11.74 20.66,11.88 20.5,12.03C20.38,12.17 20.19,12.05 20.19,12.05L16.38,7.92M7.56,16.1L11.74,19.91C11.74,19.91 11.85,20.06 11.7,20.2C11.56,20.35 11.37,20.22 11.37,20.22L7.56,16.1Z"
  }));
};

MeteorIcon.displayName = 'MeteorIcon';
MeteorIcon.defaultProps = {
  size: 24
};
var _default = MeteorIcon;
exports["default"] = _default;