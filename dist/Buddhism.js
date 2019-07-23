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

var BuddhismIcon = function BuddhismIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11,2V3C9.27,3.2 7.69,3.9 6.4,4.94L5.64,4.18L4.22,5.6L5,6.35C3.9,7.68 3.21,9.3 3,11H2V13H3C3.21,14.68 3.9,16.26 5,17.56L4.22,18.32L5.64,19.74L6.39,19C7.71,20.07 9.3,20.77 11,21V22H13V21C14.69,20.77 16.29,20.07 17.6,19L18.36,19.74L19.78,18.32L19,17.57C20.1,16.27 20.79,14.68 21,13H22V11H21C20.79,9.3 20.1,7.69 19,6.36L19.78,5.6L18.36,4.18L17.61,4.94C16.29,3.87 14.69,3.2 13,3V2H11M11,5V8L10,8.5L7.81,6.35C8.72,5.67 9.81,5.17 11,5M13,5C14.16,5.18 15.26,5.64 16.2,6.35L14,8.5L13,8V5M6.4,7.76L8.5,10L8,11H5C5.16,9.84 5.7,8.7 6.39,7.75L6.4,7.76M17.6,7.76C18.33,8.71 18.81,9.82 19,11H16L15.5,10L17.61,7.76H17.6M12,10C13.12,10 14,10.88 14,12C14,13.12 13.12,14 12,14C10.88,14 10,13.12 10,12C10,10.88 10.88,10 12,10M5,13H8L8.57,14L6.39,16.15C5.67,15.24 5.19,14.16 5,13V13M16,13H19C18.81,14.15 18.33,15.24 17.61,16.16L15.5,14L16,13M10,15.5L11,16V19C9.83,18.8 8.73,18.31 7.8,17.57L10,15.5M14,15.5L16.19,17.57C15.28,18.25 14.19,18.83 13,19V16L14,15.5Z"
  }));
};

BuddhismIcon.displayName = 'BuddhismIcon';
BuddhismIcon.defaultProps = {
  size: 24
};
var _default = BuddhismIcon;
exports["default"] = _default;