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

var BoneIcon = function BoneIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8,14C8,15.66 6.66,17 5,17C3.34,17 2,15.66 2,14C2,13.23 2.29,12.53 2.76,12C2.29,11.47 2,10.77 2,10C2,8.34 3.34,7 5,7C6.66,7 8,8.34 8,10C9.33,10.08 10.67,10.17 12,10.17C13.33,10.17 14.67,10.08 16,10C16,8.34 17.34,7 19,7C20.66,7 22,8.34 22,10C22,10.77 21.71,11.47 21.24,12C21.71,12.53 22,13.23 22,14C22,15.66 20.66,17 19,17C17.34,17 16,15.66 16,14C14.67,13.92 13.33,13.83 12,13.83C10.67,13.83 9.33,13.92 8,14Z"
  }));
};

BoneIcon.displayName = 'BoneIcon';
BoneIcon.defaultProps = {
  size: 24
};
var _default = BoneIcon;
exports["default"] = _default;