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

var FileFindOutlineIcon = function FileFindOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M6,4H13L18,9V17.58L16.16,15.74C17.44,13.8 17.23,11.17 15.5,9.46C14.55,8.5 13.28,8 12,8C10.72,8 9.45,8.5 8.47,9.46C6.5,11.41 6.5,14.57 8.47,16.5C9.44,17.5 10.72,17.97 12,17.97C12.96,17.97 13.92,17.69 14.75,17.14L17.6,20H6V4M14.11,15.1C13.55,15.66 12.8,16 12,16C11.2,16 10.45,15.67 9.89,15.1C9.33,14.54 9,13.79 9,13C9,12.19 9.32,11.44 9.89,10.88C10.45,10.31 11.2,10 12,10C12.8,10 13.55,10.31 14.11,10.88C14.67,11.44 15,12.19 15,13C15,13.79 14.68,14.54 14.11,15.1Z"
  }));
};

FileFindOutlineIcon.displayName = 'FileFindOutlineIcon';
FileFindOutlineIcon.defaultProps = {
  size: 24
};
var _default = FileFindOutlineIcon;
exports["default"] = _default;