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

var OutlookIcon = function OutlookIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,8V16C22,16.6 21.6,17 21,17H14V21L2,19.2V4.8L14,3V7H21C21.6,7 22,7.4 22,8M21,8.1L17,10.4L14,8.7V10.3L17,12L21,9.7V8.1M7.92,8.11C5.82,8.04 4.79,9.89 4.79,12.09C4.79,14.29 5.86,16.06 7.92,16.08C9.79,16.09 11,14.39 11,12.19C11,10 10.13,8.19 7.92,8.11M7.61,9.7C8.45,9.7 9.2,10.44 9.2,11.95C9.2,13.47 8.45,14.31 7.61,14.31C6.78,14.31 6.1,13.2 6.1,11.95C6.1,10.71 6.78,9.7 7.61,9.7Z"
  }));
};

OutlookIcon.displayName = 'OutlookIcon';
OutlookIcon.defaultProps = {
  size: 24
};
var _default = OutlookIcon;
exports["default"] = _default;