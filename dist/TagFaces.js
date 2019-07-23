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

var TagFacesIcon = function TagFacesIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,18C11.68,18 9,15.31 9,12C9,8.68 11.68,6 15,6C18.31,6 21,8.69 21,12C21,15.31 18.31,18 15,18M4,13C3.45,13 3,12.55 3,12C3,11.45 3.45,11 4,11C4.55,11 5,11.45 5,12C5,12.55 4.55,13 4,13M22,3H7.63C6.97,3 6.38,3.32 6,3.81L0,12L6,20.18C6.38,20.68 6.97,21 7.63,21H22C23.1,21 24,20.1 24,19V5C24,3.89 23.1,3 22,3M13,11C13.55,11 14,10.55 14,10C14,9.45 13.55,9 13,9C12.45,9 12,9.45 12,10C12,10.55 12.45,11 13,11M15,16C16.86,16 18.35,14.72 18.8,13H11.2C11.65,14.72 13.14,16 15,16M17,11C17.55,11 18,10.55 18,10C18,9.45 17.55,9 17,9C16.45,9 16,9.45 16,10C16,10.55 16.45,11 17,11Z"
  }));
};

TagFacesIcon.displayName = 'TagFacesIcon';
TagFacesIcon.defaultProps = {
  size: 24
};
var _default = TagFacesIcon;
exports["default"] = _default;