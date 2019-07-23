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

var XboxControllerOffIcon = function XboxControllerOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,5.27L3.28,4L20,20.72L18.73,22L12.5,15.75H8.75C6.75,15.75 6,18 4,19C2,19 0.5,16.04 4.42,7.69L2,5.27M9.33,6.23H14.67C16,5 18.81,6.67 18.81,6.67L19.25,7.5H19.5C23,15 22.28,18.2 20.69,18.87L7.62,5.8C8.25,5.73 8.87,5.81 9.33,6.23M12,7C11.45,7 11,7.45 11,8C11,8.55 11.45,9 12,9C12.55,9 13,8.55 13,8C13,7.45 12.55,7 12,7Z"
  }));
};

XboxControllerOffIcon.displayName = 'XboxControllerOffIcon';
XboxControllerOffIcon.defaultProps = {
  size: 24
};
var _default = XboxControllerOffIcon;
exports["default"] = _default;