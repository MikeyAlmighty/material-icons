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

var VisualStudioCodeIcon = function VisualStudioCodeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17,16.47V7.39L11,11.93M2.22,9.19C1.92,8.87 1.91,8.37 2.2,8.04L3.4,6.93C3.6,6.75 4.09,6.67 4.45,6.93L7.87,9.54L15.8,2.29C16.12,1.97 16.67,1.84 17.3,2.17L21.3,4.08C21.66,4.29 22,4.62 22,5.23V18.73C22,19.13 21.71,19.56 21.4,19.73L17,21.83C16.68,21.96 16.08,21.84 15.87,21.63L7.85,14.33L4.45,16.93C4.07,17.19 3.6,17.12 3.4,16.93L2.2,15.83C1.88,15.5 1.92,14.96 2.25,14.63L5.25,11.93"
  }));
};

VisualStudioCodeIcon.displayName = 'VisualStudioCodeIcon';
VisualStudioCodeIcon.defaultProps = {
  size: 24
};
var _default = VisualStudioCodeIcon;
exports["default"] = _default;