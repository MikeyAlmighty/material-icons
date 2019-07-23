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

var FormatSectionIcon = function FormatSectionIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15.67,4.42C14.7,3.84 13.58,3.54 12.45,3.56C10.87,3.56 9.66,4.34 9.66,5.56C9.66,6.96 11,7.47 13,8.14C15.5,8.95 17.4,9.97 17.4,12.38C17.36,13.69 16.69,14.89 15.6,15.61C16.25,16.22 16.61,17.08 16.6,17.97C16.6,20.79 14,21.97 11.5,21.97C10.04,22.03 8.59,21.64 7.35,20.87L8,19.34C9.04,20.05 10.27,20.43 11.53,20.44C13.25,20.44 14.53,19.66 14.53,18.24C14.53,17 13.75,16.31 11.25,15.45C8.5,14.5 6.6,13.5 6.6,11.21C6.67,9.89 7.43,8.69 8.6,8.07C7.97,7.5 7.61,6.67 7.6,5.81C7.6,3.45 9.77,2 12.53,2C13.82,2 15.09,2.29 16.23,2.89L15.67,4.42M11.35,13.42C12.41,13.75 13.44,14.18 14.41,14.71C15.06,14.22 15.43,13.45 15.41,12.64C15.41,11.64 14.77,10.76 13,10.14C11.89,9.77 10.78,9.31 9.72,8.77C8.97,9.22 8.5,10.03 8.5,10.91C8.5,11.88 9.23,12.68 11.35,13.42Z"
  }));
};

FormatSectionIcon.displayName = 'FormatSectionIcon';
FormatSectionIcon.defaultProps = {
  size: 24
};
var _default = FormatSectionIcon;
exports["default"] = _default;