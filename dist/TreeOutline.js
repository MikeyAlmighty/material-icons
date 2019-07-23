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

var TreeOutlineIcon = function TreeOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10.5,3C8,3 6,5 6,7.5C6,8.11 6.13,8.71 6.37,9.27C5.5,10.12 5,11.28 5,12.5C5,15 7,17 9.5,17C10,17 10.5,16.89 11,16.72V21H13V15.77C13.5,15.91 14,16 14.5,16C17.54,16 20,13.54 20,10.5C20,7.46 17.54,5 14.5,5C14.41,5 14.33,5 14.24,5C13.41,3.76 12,3 10.5,3M10.5,5C11.82,5 12.91,6.03 13,7.35C13.46,7.12 14,7 14.5,7C16.43,7 18,8.57 18,10.5C18,12.43 16.43,14 14.5,14C13.54,14 12.63,13.61 11.96,12.91C11.76,14.12 10.72,15 9.5,15C8.12,15 7,13.88 7,12.5C7,11.12 7.8,10.54 9,9.79C8.2,8.76 8,8.16 8,7.5C8,6.12 9.12,5 10.5,5Z"
  }));
};

TreeOutlineIcon.displayName = 'TreeOutlineIcon';
TreeOutlineIcon.defaultProps = {
  size: 24
};
var _default = TreeOutlineIcon;
exports["default"] = _default;