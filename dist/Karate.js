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

var KarateIcon = function KarateIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,1.27C18.04,0.72 16.82,1.04 16.27,2C15.71,2.95 16.04,4.18 17,4.73C17.95,5.28 19.17,4.96 19.73,4C20.28,3.04 19.95,1.82 19,1.27M21.27,9.34L18.7,13.79L16.96,12.79L18.69,9.79L17.14,8.5L14,13.92V22H12V13.39L2.47,7.89L3.47,6.16L11.27,10.66L13.67,6.5L7.28,4.17L8,2.29L14.73,4.74L15,4.84C15.39,5 15.76,5.15 16.12,5.35L16.96,5.84C17.31,6.04 17.65,6.28 17.96,6.54L18.19,6.74L21.27,9.34Z"
  }));
};

KarateIcon.displayName = 'KarateIcon';
KarateIcon.defaultProps = {
  size: 24
};
var _default = KarateIcon;
exports["default"] = _default;