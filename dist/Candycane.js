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

var CandycaneIcon = function CandycaneIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10,10C10,11.1 9.1,12 8,12C6.9,12 6,11.1 6,10V8C6,7.37 6.1,6.77 6.27,6.2L10,9.93V10M12,2C12.74,2 13.44,2.13 14.09,2.38L11.97,6C11.14,6 10.44,6.5 10.15,7.25L7.24,4.34C8.34,2.92 10.06,2 12,2M17.76,6.31L14,10.07V8C14,7.62 13.9,7.27 13.72,6.97L15.83,3.38C16.74,4.13 17.42,5.15 17.76,6.31M18,13.09L14,17.09V12.9L18,8.9V13.09M18,20C18,21.1 17.1,22 16,22C14.9,22 14,21.1 14,20V19.91L18,15.91V20Z"
  }));
};

CandycaneIcon.displayName = 'CandycaneIcon';
CandycaneIcon.defaultProps = {
  size: 24
};
var _default = CandycaneIcon;
exports["default"] = _default;