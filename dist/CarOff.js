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

var CarOffIcon = function CarOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.5,19.85L6.41,5.76L2.41,1.76L1.11,3L4.57,6.46L3,11V19C3,19.55 3.45,20 4,20H5C5.55,20 6,19.55 6,19V18H16.11L20.84,22.73L22.11,21.46L20.5,19.85M6.5,15C5.67,15 5,14.33 5,13.5C5,12.67 5.67,12 6.5,12C7.33,12 8,12.67 8,13.5C8,14.33 7.33,15 6.5,15M5,10L5.78,7.67L8.11,10H5M17.5,5.5L19,10H13.2L16.12,12.92C16.5,12.17 17.37,11.86 18.12,12.21C18.87,12.57 19.18,13.47 18.83,14.21C18.68,14.5 18.43,14.77 18.12,14.92L21,17.8V11L18.92,5C18.71,4.4 18.14,4 17.5,4H7.2L8.7,5.5H17.5Z"
  }));
};

CarOffIcon.displayName = 'CarOffIcon';
CarOffIcon.defaultProps = {
  size: 24
};
var _default = CarOffIcon;
exports["default"] = _default;