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

var EarthBoxOffIcon = function EarthBoxOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M23,4.27L21,6.27V19C21,20.1 20.1,21 19,21H6.27L4.27,23L3,21.72L21.72,3L23,4.27M5,3H19.18L17.18,5H15.78C15.67,6 14.83,6.79 13.8,6.79H11.8V8.79C11.8,9.35 11.35,9.79 10.8,9.79H8.8V11.79H10.38L8.55,13.62L5,10.29V17.18L3,19.18V5C3,3.89 3.89,3 5,3M11.8,19V17.79C11.17,17.79 10.6,17.5 10.23,17.04L8.27,19H11.8M15.8,12.79V15.79H16.8C17.69,15.79 18.74,16.38 19,17.18V8.27L15.33,11.94C15.61,12.12 15.8,12.43 15.8,12.79Z"
  }));
};

EarthBoxOffIcon.displayName = 'EarthBoxOffIcon';
EarthBoxOffIcon.defaultProps = {
  size: 24
};
var _default = EarthBoxOffIcon;
exports["default"] = _default;