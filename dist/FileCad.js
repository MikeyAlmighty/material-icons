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

var FileCadIcon = function FileCadIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,2C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M13,3.5L18.5,9H13M9.88,9.25H11.12V10.19C11.81,10.18 12.38,10.75 12.38,11.44V13.5L12.26,13.63L13.15,15.17C13.47,14.67 13.63,14.09 13.62,13.5H14.88C14.88,14.54 14.5,15.55 13.83,16.35L15.5,19.25V20.5L14.42,19.88L12.87,17.19C12.17,17.65 11.34,17.89 10.5,17.89C9.66,17.89 8.84,17.65 8.13,17.19L6.58,19.88L5.5,20.5V19.25L8.74,13.63L8.62,13.5V11.44C8.62,10.75 9.19,10.18 9.88,10.19M10.5,11.44C9.81,11.44 9.46,12.28 9.95,12.77C10.44,13.26 11.28,12.92 11.28,12.22C11.28,11.79 10.93,11.44 10.5,11.44M9.66,14.54L8.76,16.11C9.81,16.82 11.19,16.82 12.24,16.11L11.34,14.54C10.87,15 10.13,15 9.66,14.54Z"
  }));
};

FileCadIcon.displayName = 'FileCadIcon';
FileCadIcon.defaultProps = {
  size: 24
};
var _default = FileCadIcon;
exports["default"] = _default;