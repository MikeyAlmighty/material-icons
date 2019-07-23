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

var AirbagIcon = function AirbagIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14,8C14,10.76 11.76,13 9,13C6.24,13 4,10.76 4,8C4,5.24 6.24,3 9,3C11.76,3 14,5.24 14,8M10.46,15.55L13,18.03L11,18.05L7.5,21.58L6,20.09L10.46,15.55M17,2C18.08,2 19,2.88 19,4C19,5.08 18.12,6 17,6C15.92,6 15,5.12 15,4C15,2.92 15.89,2 17,2M14.41,15H11.59L17.29,20.71L18.71,19.29L14.41,15M15.12,14.29L19.41,18.59L19.63,18.8C19.86,18.42 20,18 20,17.5V9.5C20,8.12 18.88,7 17.5,7C16.12,7 15,8.12 15,9.5V14.17L15.12,14.29Z"
  }));
};

AirbagIcon.displayName = 'AirbagIcon';
AirbagIcon.defaultProps = {
  size: 24
};
var _default = AirbagIcon;
exports["default"] = _default;