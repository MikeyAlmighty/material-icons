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

var SetTopBoxIcon = function SetTopBoxIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,15.5C5,15.78 4.78,16 4.5,16H3.5C3.22,16 3,15.78 3,15.5V15H2C1.45,15 1,14.55 1,14V11C1,10.45 1.45,10 2,10H22C22.55,10 23,10.45 23,11V14C23,14.55 22.55,15 22,15H21V15.5C21,15.78 20.78,16 20.5,16H19.5C19.22,16 19,15.78 19,15.5V15H5V15.5M3,12V13H5V12H3M6,12V13H8V12H6M20.5,11.5C19.95,11.5 19.5,11.95 19.5,12.5C19.5,13.05 19.95,13.5 20.5,13.5C21.05,13.5 21.5,13.05 21.5,12.5C21.5,11.95 21.05,11.5 20.5,11.5Z"
  }));
};

SetTopBoxIcon.displayName = 'SetTopBoxIcon';
SetTopBoxIcon.defaultProps = {
  size: 24
};
var _default = SetTopBoxIcon;
exports["default"] = _default;