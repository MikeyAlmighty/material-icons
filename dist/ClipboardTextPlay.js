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

var ClipboardTextPlayIcon = function ClipboardTextPlayIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,3C20.1,3 21,3.9 21,5V13.34C20.36,13.11 19.68,13 19,13C15.68,13 13,15.69 13,19C13,19.68 13.11,20.36 13.34,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H9.18C9.5,2.16 10.14,1.5 11,1.2C12.53,0.64 14.25,1.44 14.82,3H19M12,3C11.45,3 11,3.45 11,4C11,4.55 11.45,5 12,5C12.55,5 13,4.55 13,4C13,3.45 12.55,3 12,3M11,17V15H7V17H11M13,13V11H7V13H13M17,9V7H7V9H17M17,16L22,19L17,22V16Z"
  }));
};

ClipboardTextPlayIcon.displayName = 'ClipboardTextPlayIcon';
ClipboardTextPlayIcon.defaultProps = {
  size: 24
};
var _default = ClipboardTextPlayIcon;
exports["default"] = _default;