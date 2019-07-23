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

var PopcornIcon = function PopcornIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7,22H4.75C4.75,22 4,22 3.81,20.65L2.04,3.81L2,3.5C2,2.67 2.9,2 4,2C5.1,2 6,2.67 6,3.5C6,2.67 6.9,2 8,2C9.1,2 10,2.67 10,3.5C10,2.67 10.9,2 12,2C13.09,2 14,2.66 14,3.5V3.5C14,2.67 14.9,2 16,2C17.1,2 18,2.67 18,3.5C18,2.67 18.9,2 20,2C21.1,2 22,2.67 22,3.5L21.96,3.81L20.19,20.65C20,22 19.25,22 19.25,22H17L16.5,22H13.75L10.25,22H7.5L7,22M17.85,4.93C17.55,4.39 16.84,4 16,4C15.19,4 14.36,4.36 14,4.87L13.78,20H16.66L17.85,4.93M10,4.87C9.64,4.36 8.81,4 8,4C7.16,4 6.45,4.39 6.15,4.93L7.34,20H10.22L10,4.87Z"
  }));
};

PopcornIcon.displayName = 'PopcornIcon';
PopcornIcon.defaultProps = {
  size: 24
};
var _default = PopcornIcon;
exports["default"] = _default;