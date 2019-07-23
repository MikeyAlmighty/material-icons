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

var InboxMultipleOutlineIcon = function InboxMultipleOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,3C20.1,3 21,3.9 21,5V12C21,13.1 20.1,14 19,14H5C3.9,14 3,13.1 3,12V5C3,3.9 3.9,3 5,3H19M5,10V12H9.4C8.8,11.47 8.34,10.78 8.13,10H5M19,12V10H15.87C15.66,10.78 15.2,11.47 14.6,12H19M19,8V5H5V8H10V9C10,10.07 10.93,11 12,11C13.07,11 14,10.07 14,9V8H19M21,19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V15H10V16C10,17.07 10.93,18 12,18C13.07,18 14,17.07 14,16V15H21V19M5,17V19H9.4C8.8,18.47 8.34,17.78 8.13,17H5M19,19V17H15.87C15.66,17.78 15.2,18.47 14.6,19H19Z"
  }));
};

InboxMultipleOutlineIcon.displayName = 'InboxMultipleOutlineIcon';
InboxMultipleOutlineIcon.defaultProps = {
  size: 24
};
var _default = InboxMultipleOutlineIcon;
exports["default"] = _default;