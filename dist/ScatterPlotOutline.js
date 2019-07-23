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

var ScatterPlotOutlineIcon = function ScatterPlotOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7,18C4.79,18 3,16.21 3,14C3,11.79 4.79,10 7,10C9.21,10 11,11.79 11,14C11,16.21 9.21,18 7,18M7,12C5.9,12 5,12.9 5,14C5,15.1 5.9,16 7,16C8.1,16 9,15.1 9,14C9,12.9 8.1,12 7,12M11,10C8.79,10 7,8.21 7,6C7,3.79 8.79,2 11,2C13.21,2 15,3.79 15,6C15,8.21 13.21,10 11,10M11,4C9.9,4 9,4.9 9,6C9,7.1 9.9,8 11,8C12.1,8 13,7.1 13,6C13,4.9 12.1,4 11,4M16.6,21.6C14.39,21.6 12.6,19.81 12.6,17.6C12.6,15.39 14.39,13.6 16.6,13.6C18.81,13.6 20.6,15.39 20.6,17.6C20.6,19.81 18.81,21.6 16.6,21.6M16.6,15.6C15.5,15.6 14.6,16.5 14.6,17.6C14.6,18.7 15.5,19.6 16.6,19.6C17.7,19.6 18.6,18.7 18.6,17.6C18.6,16.5 17.7,15.6 16.6,15.6Z"
  }));
};

ScatterPlotOutlineIcon.displayName = 'ScatterPlotOutlineIcon';
ScatterPlotOutlineIcon.defaultProps = {
  size: 24
};
var _default = ScatterPlotOutlineIcon;
exports["default"] = _default;