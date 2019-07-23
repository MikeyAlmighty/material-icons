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

var PencilLockIcon = function PencilLockIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5.5,2C4.12,2 3,3.12 3,4.5V5C2.45,5 2,5.45 2,6V10C2,10.55 2.45,11 3,11H8C8.55,11 9,10.55 9,10V6C9,5.45 8.55,5 8,5V4.5C8,3.12 6.88,2 5.5,2M5.5,3C6.33,3 7,3.67 7,4.5V5H4V4.5C4,3.67 4.67,3 5.5,3M19.66,3C19.4,3 19.16,3.09 18.97,3.28L17.13,5.13L20.88,8.88L22.72,7.03C23.11,6.64 23.11,6 22.72,5.63L20.38,3.28C20.18,3.09 19.91,3 19.66,3M16.06,6.19L5,17.25V21H8.75L19.81,9.94L16.06,6.19Z"
  }));
};

PencilLockIcon.displayName = 'PencilLockIcon';
PencilLockIcon.defaultProps = {
  size: 24
};
var _default = PencilLockIcon;
exports["default"] = _default;