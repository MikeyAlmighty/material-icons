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

var CommentQuestionOutlineIcon = function CommentQuestionOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4,2C2.9,2 2,2.9 2,4V16C2,17.1 2.9,18 4,18H8V21C8,21.55 8.45,22 9,22H9.5V22C9.75,22 10,21.9 10.2,21.71L13.9,18H20C21.1,18 22,17.1 22,16V4C22,2.89 21.1,2 20,2H4M4,4H20V16H13.08L10,19.08V16H4V4M12.19,5.5C11.3,5.5 10.59,5.68 10.05,6.04C9.5,6.4 9.22,7 9.27,7.69C0.21,7.69 6.57,7.69 11.24,7.69C11.24,7.41 11.34,7.2 11.5,7.06C11.7,6.92 11.92,6.85 12.19,6.85C12.5,6.85 12.77,6.93 12.95,7.11C13.13,7.28 13.22,7.5 13.22,7.8C13.22,8.08 13.14,8.33 13,8.54C12.83,8.76 12.62,8.94 12.36,9.08C11.84,9.4 11.5,9.68 11.29,9.92C11.1,10.16 11,10.5 11,11H13C13,10.72 13.05,10.5 13.14,10.32C13.23,10.15 13.4,10 13.66,9.85C14.12,9.64 14.5,9.36 14.79,9C15.08,8.63 15.23,8.24 15.23,7.8C15.23,7.1 14.96,6.54 14.42,6.12C13.88,5.71 13.13,5.5 12.19,5.5M11,12V14H13V12H11Z"
  }));
};

CommentQuestionOutlineIcon.displayName = 'CommentQuestionOutlineIcon';
CommentQuestionOutlineIcon.defaultProps = {
  size: 24
};
var _default = CommentQuestionOutlineIcon;
exports["default"] = _default;