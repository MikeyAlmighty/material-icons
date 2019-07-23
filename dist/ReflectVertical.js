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

var ReflectVerticalIcon = function ReflectVerticalIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18,23H6C5.61,23 5.26,22.79 5.09,22.45C4.92,22.11 4.96,21.7 5.19,21.4L11.2,13.38C11.58,12.87 12.42,12.87 12.8,13.38L18.81,21.4C19.04,21.7 19.08,22.11 18.91,22.45C18.74,22.79 18.39,23 18,23M18,1C18.39,1 18.74,1.21 18.91,1.55C19.08,1.89 19.04,2.3 18.81,2.6L12.8,10.62C12.42,11.13 11.58,11.13 11.2,10.62L5.19,2.6C4.96,2.3 4.92,1.89 5.09,1.55C5.26,1.21 5.61,1 6,1H18M8,3L12,8.35L16,3H8Z"
  }));
};

ReflectVerticalIcon.displayName = 'ReflectVerticalIcon';
ReflectVerticalIcon.defaultProps = {
  size: 24
};
var _default = ReflectVerticalIcon;
exports["default"] = _default;