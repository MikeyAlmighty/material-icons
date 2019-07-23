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

var VectorCurveIcon = function VectorCurveIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.5,2C19.33,2 20,2.67 20,3.5C20,4.33 19.33,5 18.5,5C18.27,5 18.05,4.95 17.85,4.85L14.16,8.55L14.5,9C16.69,7.74 19.26,7 22,7L23,7.03V9.04L22,9C19.42,9 17,9.75 15,11.04C15,13.23 13.23,15 11.04,15C9.75,17 9,19.42 9,22L9.04,23H7.03L7,22C7,19.26 7.74,16.69 9,14.5L8.55,14.16L4.85,17.85C4.95,18.05 5,18.27 5,18.5C5,19.33 4.33,20 3.5,20C2.67,20 2,19.33 2,18.5C2,17.67 2.67,17 3.5,17C3.73,17 3.95,17.05 4.15,17.15L7.84,13.45C7.31,12.78 7,11.92 7,11C7,8.79 8.79,7 11,7C11.92,7 12.78,7.31 13.45,7.84L17.15,4.15C17.05,3.95 17,3.73 17,3.5C17,2.67 17.67,2 18.5,2M11,9C9.9,9 9,9.9 9,11C9,12.1 9.9,13 11,13C12.1,13 13,12.1 13,11C13,9.9 12.1,9 11,9Z"
  }));
};

VectorCurveIcon.displayName = 'VectorCurveIcon';
VectorCurveIcon.defaultProps = {
  size: 24
};
var _default = VectorCurveIcon;
exports["default"] = _default;