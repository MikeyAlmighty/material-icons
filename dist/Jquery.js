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

var JqueryIcon = function JqueryIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22.88,10.41C20.77,12.18 17.61,11.9 15.84,9.79C14.06,7.67 14.34,4.5 16.45,2.75L16.96,2.37C15.27,4.19 15.16,7.03 16.8,9C18.43,10.94 21.25,11.32 23.34,9.97L22.88,10.41M21.1,14.5C17.93,17.17 13.2,16.76 10.54,13.58C7.87,10.41 8.29,5.68 11.46,3L12.38,2.36C9.96,5.09 9.84,9.26 12.26,12.14C14.68,15 18.8,15.63 21.91,13.72L21.1,14.5M19.97,19.38C15.53,23.11 8.9,22.53 5.17,18.08C1.45,13.64 2.03,7 6.47,3.29L7.58,2.5C4.07,6.3 3.85,12.23 7.28,16.32C10.71,20.4 16.59,21.22 20.96,18.43L19.97,19.38Z"
  }));
};

JqueryIcon.displayName = 'JqueryIcon';
JqueryIcon.defaultProps = {
  size: 24
};
var _default = JqueryIcon;
exports["default"] = _default;