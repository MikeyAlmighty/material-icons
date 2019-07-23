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

var RecycleIcon = function RecycleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21.82,15.42L19.32,19.75C18.83,20.61 17.92,21.06 17,21H15V23L12.5,18.5L15,14V16H17.82L15.6,12.15L19.93,9.65L21.73,12.77C22.25,13.54 22.32,14.57 21.82,15.42M9.21,3.06H14.21C15.19,3.06 16.04,3.63 16.45,4.45L17.45,6.19L19.18,5.19L16.54,9.6L11.39,9.69L13.12,8.69L11.71,6.24L9.5,10.09L5.16,7.59L6.96,4.47C7.37,3.64 8.22,3.06 9.21,3.06M5.05,19.76L2.55,15.43C2.06,14.58 2.13,13.56 2.64,12.79L3.64,11.06L1.91,10.06L7.05,10.14L9.7,14.56L7.97,13.56L6.56,16H11V21H7.4C6.47,21.07 5.55,20.61 5.05,19.76Z"
  }));
};

RecycleIcon.displayName = 'RecycleIcon';
RecycleIcon.defaultProps = {
  size: 24
};
var _default = RecycleIcon;
exports["default"] = _default;