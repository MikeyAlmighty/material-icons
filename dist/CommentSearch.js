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

var CommentSearchIcon = function CommentSearchIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15.5,2C18,2 20,4 20,6.5C20,7.38 19.75,8.2 19.31,8.89L22.41,12L21,13.39L17.89,10.31C17.2,10.75 16.38,11 15.5,11C13,11 11,9 11,6.5C11,4 13,2 15.5,2M15.5,4C14.12,4 13,5.12 13,6.5C13,7.88 14.12,9 15.5,9C16.88,9 18,7.88 18,6.5C18,5.12 16.88,4 15.5,4M4,4H9.5C9.19,4.79 9,5.64 9,6.5C9,10.09 11.91,13 15.5,13C16.18,13 16.83,12.89 17.46,12.69L20,15.23V16C20,17.1 19.1,18 18,18H13.9L10.2,21.71C10,21.89 9.76,22 9.5,22H9C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V6C2,4.9 2.9,4 4,4Z"
  }));
};

CommentSearchIcon.displayName = 'CommentSearchIcon';
CommentSearchIcon.defaultProps = {
  size: 24
};
var _default = CommentSearchIcon;
exports["default"] = _default;