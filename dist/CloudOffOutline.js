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

var CloudOffOutlineIcon = function CloudOffOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.73,10L15.73,18H6C3.79,18 2,16.21 2,14C2,11.79 3.79,10 6,10M3,5.27L5.75,8C2.56,8.15 0,10.77 0,14C0,17.31 2.69,20 6,20H17.73L19.73,22L21,20.73L4.27,4M19.35,10.03C18.67,6.59 15.64,4 12,4C10.5,4 9.15,4.43 8,5.17L9.45,6.63C10.21,6.23 11.08,6 12,6C15.04,6 17.5,8.46 17.5,11.5V12H19C20.66,12 22,13.34 22,15C22,16.13 21.36,17.11 20.44,17.62L21.89,19.07C23.16,18.16 24,16.68 24,15C24,12.36 21.95,10.22 19.35,10.03Z"
  }));
};

CloudOffOutlineIcon.displayName = 'CloudOffOutlineIcon';
CloudOffOutlineIcon.defaultProps = {
  size: 24
};
var _default = CloudOffOutlineIcon;
exports["default"] = _default;