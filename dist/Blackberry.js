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

var BlackberryIcon = function BlackberryIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5.45,10.28C6.4,10.28 7.5,11.05 7.5,12C7.5,12.95 6.4,13.72 5.45,13.72H2L2.69,10.28H5.45M6.14,4.76C7.09,4.76 8.21,5.53 8.21,6.5C8.21,7.43 7.09,8.21 6.14,8.21H2.69L3.38,4.76H6.14M13.03,4.76C14,4.76 15.1,5.53 15.1,6.5C15.1,7.43 14,8.21 13.03,8.21H9.41L10.1,4.76H13.03M12.34,10.28C13.3,10.28 14.41,11.05 14.41,12C14.41,12.95 13.3,13.72 12.34,13.72H8.72L9.41,10.28H12.34M10.97,15.79C11.92,15.79 13.03,16.57 13.03,17.5C13.03,18.47 11.92,19.24 10.97,19.24H7.5L8.21,15.79H10.97M18.55,13.72C19.5,13.72 20.62,14.5 20.62,15.45C20.62,16.4 19.5,17.17 18.55,17.17H15.1L15.79,13.72H18.55M19.93,8.21C20.88,8.21 22,9 22,9.93C22,10.88 20.88,11.66 19.93,11.66H16.5L17.17,8.21H19.93Z"
  }));
};

BlackberryIcon.displayName = 'BlackberryIcon';
BlackberryIcon.defaultProps = {
  size: 24
};
var _default = BlackberryIcon;
exports["default"] = _default;