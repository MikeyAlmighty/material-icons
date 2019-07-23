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

var GrainIcon = function GrainIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10,12C8.9,12 8,12.9 8,14C8,15.1 8.9,16 10,16C11.1,16 12,15.1 12,14C12,12.9 11.1,12 10,12M6,8C4.9,8 4,8.9 4,10C4,11.1 4.9,12 6,12C7.1,12 8,11.1 8,10C8,8.9 7.1,8 6,8M6,16C4.9,16 4,16.9 4,18C4,19.1 4.9,20 6,20C7.1,20 8,19.1 8,18C8,16.9 7.1,16 6,16M18,8C19.1,8 20,7.1 20,6C20,4.9 19.1,4 18,4C16.9,4 16,4.9 16,6C16,7.1 16.9,8 18,8M14,16C12.9,16 12,16.9 12,18C12,19.1 12.9,20 14,20C15.1,20 16,19.1 16,18C16,16.9 15.1,16 14,16M18,12C16.9,12 16,12.9 16,14C16,15.1 16.9,16 18,16C19.1,16 20,15.1 20,14C20,12.9 19.1,12 18,12M14,8C12.9,8 12,8.9 12,10C12,11.1 12.9,12 14,12C15.1,12 16,11.1 16,10C16,8.9 15.1,8 14,8M10,4C8.9,4 8,4.9 8,6C8,7.1 8.9,8 10,8C11.1,8 12,7.1 12,6C12,4.9 11.1,4 10,4Z"
  }));
};

GrainIcon.displayName = 'GrainIcon';
GrainIcon.defaultProps = {
  size: 24
};
var _default = GrainIcon;
exports["default"] = _default;