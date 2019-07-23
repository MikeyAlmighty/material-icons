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

var CommentEyeOutlineIcon = function CommentEyeOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16,6C16.56,6 17,6.44 17,7C17,7.56 16.56,8 16,8C15.44,8 15,7.56 15,7C15,6.44 15.44,6 16,6M16,3C18.73,3 21.06,4.66 22,7C21.06,9.34 18.73,11 16,11C13.27,11 10.94,9.34 10,7C10.94,4.66 13.27,3 16,3M16,4.5C14.62,4.5 13.5,5.62 13.5,7C13.5,8.38 14.62,9.5 16,9.5C17.38,9.5 18.5,8.38 18.5,7C18.5,5.62 17.38,4.5 16,4.5M18,12.75V16H13.08L10,19.08V16H4V6H8.27C8.59,5.27 9,4.6 9.5,4H4C2.9,4 2,4.9 2,6V16C2,17.11 2.9,18 4,18H8V21C8,21.55 8.45,22 9,22H9.5C9.75,22 10,21.9 10.2,21.71L13.9,18H18C19.11,18 20,17.11 20,16V12C19.37,12.33 18.7,12.58 18,12.75Z"
  }));
};

CommentEyeOutlineIcon.displayName = 'CommentEyeOutlineIcon';
CommentEyeOutlineIcon.defaultProps = {
  size: 24
};
var _default = CommentEyeOutlineIcon;
exports["default"] = _default;