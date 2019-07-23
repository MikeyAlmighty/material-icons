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

var YoutubeCreatorStudioIcon = function YoutubeCreatorStudioIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10,15L15,12L10,9V15M19.45,13L21.56,14.63C21.78,14.78 21.81,15 21.66,15.28L19.64,18.75C19.5,18.97 19.31,19.03 19.03,18.94L16.55,17.95C15.89,18.42 15.33,18.75 14.86,18.94L14.5,21.56C14.42,21.84 14.27,22 14,22H10C9.73,22 9.58,21.84 9.5,21.56L9.14,18.94C8.55,18.69 8,18.36 7.45,17.95L4.97,18.94C4.69,19.03 4.5,18.97 4.36,18.75L2.34,15.28C2.19,15 2.22,14.78 2.44,14.63L4.55,13C4.5,12.77 4.5,12.44 4.5,12C4.5,11.56 4.5,11.23 4.55,11L2.44,9.38C2.22,9.22 2.19,9 2.34,8.72L4.36,5.25C4.5,5.03 4.69,4.97 4.97,5.06L7.45,6.05C8.11,5.58 8.67,5.25 9.14,5.06L9.5,2.44C9.58,2.16 9.73,2 10,2H14C14.27,2 14.42,2.16 14.5,2.44L14.86,5.06C15.45,5.31 16,5.64 16.55,6.05L19.03,5.06C19.31,4.97 19.5,5.03 19.64,5.25L21.66,8.72C21.81,9 21.78,9.22 21.56,9.38L19.45,11C19.5,11.23 19.5,11.56 19.5,12C19.5,12.44 19.5,12.77 19.45,13Z"
  }));
};

YoutubeCreatorStudioIcon.displayName = 'YoutubeCreatorStudioIcon';
YoutubeCreatorStudioIcon.defaultProps = {
  size: 24
};
var _default = YoutubeCreatorStudioIcon;
exports["default"] = _default;