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

var PhoneRotateLandscapeIcon = function PhoneRotateLandscapeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9,1H3C1.9,1 1,1.9 1,3V16C1,17.1 1.9,18 3,18H9C10.1,18 11,17.1 11,16V3C11,1.9 10.1,1 9,1M9,15H3V3H9V15M21,13H13V15H21V21H9V20H6V21C6,22.1 6.9,23 8,23H21C22.1,23 23,22.1 23,21V15C23,13.9 22.1,13 21,13M23,10L19,8L20.91,7.09C19.74,4.31 17,2.5 14,2.5V1C18.97,1 23,5.03 23,10Z"
  }));
};

PhoneRotateLandscapeIcon.displayName = 'PhoneRotateLandscapeIcon';
PhoneRotateLandscapeIcon.defaultProps = {
  size: 24
};
var _default = PhoneRotateLandscapeIcon;
exports["default"] = _default;