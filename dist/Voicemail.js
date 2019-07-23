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

var VoicemailIcon = function VoicemailIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.5,15C16.57,15 15,13.43 15,11.5C15,9.57 16.57,8 18.5,8C20.43,8 22,9.57 22,11.5C22,13.43 20.43,15 18.5,15M5.5,15C3.57,15 2,13.43 2,11.5C2,9.57 3.57,8 5.5,8C7.43,8 9,9.57 9,11.5C9,13.43 7.43,15 5.5,15M18.5,6C15.46,6 13,8.46 13,11.5C13,12.83 13.47,14.05 14.26,15H9.74C10.53,14.05 11,12.83 11,11.5C11,8.46 8.54,6 5.5,6C2.46,6 0,8.46 0,11.5C0,14.54 2.46,17 5.5,17H18.5C21.54,17 24,14.54 24,11.5C24,8.46 21.54,6 18.5,6Z"
  }));
};

VoicemailIcon.displayName = 'VoicemailIcon';
VoicemailIcon.defaultProps = {
  size: 24
};
var _default = VoicemailIcon;
exports["default"] = _default;