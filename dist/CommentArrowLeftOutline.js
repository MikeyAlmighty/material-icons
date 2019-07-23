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

var CommentArrowLeftOutlineIcon = function CommentArrowLeftOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4,2C2.9,2 2,2.9 2,4V16C2,17.11 2.9,18 4,18H8V21C8,21.55 8.45,22 9,22H9.5V22C9.75,22 10,21.9 10.2,21.71L13.9,18H20C21.11,18 22,17.11 22,16V4C22,2.89 21.1,2 20,2H4M4,4H20V16H13.08L10,19.08V16H4V4M16.17,11.12V9.05H11.53L13.33,7.25L12.09,6L8,10.09L12.09,14.17L13.33,12.92L11.53,11.12H16.17Z"
  }));
};

CommentArrowLeftOutlineIcon.displayName = 'CommentArrowLeftOutlineIcon';
CommentArrowLeftOutlineIcon.defaultProps = {
  size: 24
};
var _default = CommentArrowLeftOutlineIcon;
exports["default"] = _default;