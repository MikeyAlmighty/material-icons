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

var CloudDownloadOutlineIcon = function CloudDownloadOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8,13H10.55V10H13.45V13H16L12,17L8,13M19.35,10.04C21.95,10.22 24,12.36 24,15C24,17.76 21.76,20 19,20H6C2.69,20 0,17.31 0,14C0,10.91 2.34,8.36 5.35,8.04C6.6,5.64 9.11,4 12,4C15.64,4 18.67,6.59 19.35,10.04M19,18C20.66,18 22,16.66 22,15C22,13.45 20.78,12.14 19.22,12.04L17.69,11.93L17.39,10.43C16.88,7.86 14.62,6 12,6C9.94,6 8.08,7.14 7.13,8.97L6.63,9.92L5.56,10.03C3.53,10.24 2,11.95 2,14C2,16.21 3.79,18 6,18H19Z"
  }));
};

CloudDownloadOutlineIcon.displayName = 'CloudDownloadOutlineIcon';
CloudDownloadOutlineIcon.defaultProps = {
  size: 24
};
var _default = CloudDownloadOutlineIcon;
exports["default"] = _default;