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

var BaseballBatIcon = function BaseballBatIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,2C19.72,2 19.5,2.11 19.29,2.29L9.79,11.79C9.75,11.83 9.72,11.87 7.23,15.35L4,18.59L3.71,18.29C3.5,18.1 3.26,18 3,18C2.44,18 2,18.44 2,19C2,19.26 2.1,19.5 2.29,19.71L4.29,21.71C4.68,22.11 5.31,22.12 5.71,21.74C6.11,21.35 6.12,20.72 5.71,20.29L5.41,20L8.64,16.77L12.21,14.21L21.71,4.71C22.1,4.32 22.1,3.68 21.71,3.29L20.71,2.29C20.5,2.1 20.26,2 20,2M18.5,13C17.12,13 16,14.12 16,15.5C16,16.88 17.12,18 18.5,18C19.88,18 21,16.88 21,15.5C21,14.12 19.88,13 18.5,13Z"
  }));
};

BaseballBatIcon.displayName = 'BaseballBatIcon';
BaseballBatIcon.defaultProps = {
  size: 24
};
var _default = BaseballBatIcon;
exports["default"] = _default;