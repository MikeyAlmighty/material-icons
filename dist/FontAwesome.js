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

var FontAwesomeIcon = function FontAwesomeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,3C7.38,3 8.5,4.12 8.5,5.5C8.5,6.53 7.88,7.41 7,7.79V8.66C8.11,8.36 9.72,8 11,8C12.15,8 12.89,8.22 13.54,8.42C14.13,8.6 14.65,8.75 15.5,8.75C17.13,8.75 18.4,8.18 18.54,8.11C18.68,8.04 18.84,8 19,8C19.55,8 20,8.45 20,9V17C20,17.38 19.79,17.72 19.45,17.89C19.38,17.93 17.71,18.75 15.5,18.75C14.39,18.75 13.45,18.55 12.54,18.35C11.69,18.17 10.89,18 10,18C8.85,18 7.67,18.39 7,18.66V22H5V7.79C4.12,7.41 3.5,6.53 3.5,5.5C3.5,4.12 4.62,3 6,3Z"
  }));
};

FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.defaultProps = {
  size: 24
};
var _default = FontAwesomeIcon;
exports["default"] = _default;