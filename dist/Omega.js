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

var OmegaIcon = function OmegaIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19.15,19H13.39V16.87C15.5,15.25 16.59,13.24 16.59,10.84C16.59,9.34 16.16,8.16 15.32,7.29C14.47,6.42 13.37,6 12.03,6C10.68,6 9.57,6.42 8.71,7.3C7.84,8.17 7.41,9.37 7.41,10.88C7.41,13.26 8.5,15.26 10.61,16.87V19H4.85V16.87H8.41C6.04,15.32 4.85,13.23 4.85,10.6C4.85,8.5 5.5,6.86 6.81,5.66C8.12,4.45 9.84,3.85 11.97,3.85C14.15,3.85 15.89,4.45 17.19,5.64C18.5,6.83 19.15,8.5 19.15,10.58C19.15,13.21 17.95,15.31 15.55,16.87H19.15V19Z"
  }));
};

OmegaIcon.displayName = 'OmegaIcon';
OmegaIcon.defaultProps = {
  size: 24
};
var _default = OmegaIcon;
exports["default"] = _default;