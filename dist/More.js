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

var MoreIcon = function MoreIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,13.5C18.17,13.5 17.5,12.83 17.5,12C17.5,11.17 18.17,10.5 19,10.5C19.83,10.5 20.5,11.17 20.5,12C20.5,12.83 19.83,13.5 19,13.5M14,13.5C13.17,13.5 12.5,12.83 12.5,12C12.5,11.17 13.17,10.5 14,10.5C14.83,10.5 15.5,11.17 15.5,12C15.5,12.83 14.83,13.5 14,13.5M9,13.5C8.17,13.5 7.5,12.83 7.5,12C7.5,11.17 8.17,10.5 9,10.5C9.83,10.5 10.5,11.17 10.5,12C10.5,12.83 9.83,13.5 9,13.5M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.37,21 7.06,21H22C23.1,21 24,20.1 24,19V5C24,3.89 23.1,3 22,3Z"
  }));
};

MoreIcon.displayName = 'MoreIcon';
MoreIcon.defaultProps = {
  size: 24
};
var _default = MoreIcon;
exports["default"] = _default;