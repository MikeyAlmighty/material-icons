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

var PanoramaHorizontalIcon = function PanoramaHorizontalIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21.43,4C21.33,4 21.23,4 21.12,4.06C18.18,5.16 15.09,5.7 12,5.7C8.91,5.7 5.82,5.15 2.88,4.06C2.77,4 2.66,4 2.57,4C2.23,4 2,4.23 2,4.63V19.38C2,19.77 2.23,20 2.57,20C2.67,20 2.77,20 2.88,19.94C5.82,18.84 8.91,18.3 12,18.3C15.09,18.3 18.18,18.85 21.12,19.94C21.23,20 21.33,20 21.43,20C21.76,20 22,19.77 22,19.37V4.63C22,4.23 21.76,4 21.43,4M20,6.54V17.45C17.4,16.68 14.72,16.29 12,16.29C9.28,16.29 6.6,16.68 4,17.45V6.54C6.6,7.31 9.28,7.7 12,7.7C14.72,7.71 17.4,7.32 20,6.54Z"
  }));
};

PanoramaHorizontalIcon.displayName = 'PanoramaHorizontalIcon';
PanoramaHorizontalIcon.defaultProps = {
  size: 24
};
var _default = PanoramaHorizontalIcon;
exports["default"] = _default;