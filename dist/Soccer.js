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

var SoccerIcon = function SoccerIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,3C13.76,3 15.4,3.53 16.78,4.41L16.5,5H13L12,5L10.28,4.16L10.63,3.13C11.08,3.05 11.53,3 12,3M9.53,3.38L9.19,4.41L6.63,5.69L5.38,5.94C6.5,4.73 7.92,3.84 9.53,3.38M13,6H16L18.69,9.59L17.44,12.16L14.81,12.78L11.53,8.94L13,6M6.16,6.66L7,10L5.78,13.06L3.22,13.94C3.08,13.31 3,12.67 3,12C3,10.1 3.59,8.36 4.59,6.91L6.16,6.66M20.56,9.22C20.85,10.09 21,11.03 21,12C21,13.44 20.63,14.79 20.03,16H19L18.16,12.66L19.66,9.66L20.56,9.22M8,10H11L13.81,13.28L12,16L8.84,16.78L6.53,13.69L8,10M12,17L15,19L14.13,20.72C13.44,20.88 12.73,21 12,21C10.25,21 8.63,20.5 7.25,19.63L8.41,17.91L12,17M19,17H19.5C18.5,18.5 17,19.67 15.31,20.34L16,19L19,17Z"
  }));
};

SoccerIcon.displayName = 'SoccerIcon';
SoccerIcon.defaultProps = {
  size: 24
};
var _default = SoccerIcon;
exports["default"] = _default;