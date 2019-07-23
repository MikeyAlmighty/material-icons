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

var ChiliMediumIcon = function ChiliMediumIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15.75,9L16.95,8.24C17.58,8.58 18,9.24 18,10V21.75C18,21.75 10,20 10,11V10C10,9.27 10.39,8.63 10.97,8.28L12.43,9L14,8L15.75,9M12,2C13.53,2 14.8,3.15 15,4.64C16,4.93 16.81,5.67 17.22,6.63L15.75,7.5L14,6.5L12.43,7.5L10.76,6.67C11.15,5.72 11.95,5 12.94,4.66C12.8,4.28 12.43,4 12,4V2M8,10C8,18 11.63,19.84 14,21.75C14,21.75 6,20 6,11V10C6,9.27 6.39,8.63 6.97,8.28L8.3,8.94C8.11,9.25 8,9.61 8,10M8.43,7.5L6.76,6.67C7.15,5.72 7.95,5 8.94,4.66C8.8,4.28 8.43,4 8,4V2C8.77,2 9.47,2.29 10,2.76V4C10.43,4 10.8,4.28 10.94,4.66C9.95,5 9.15,5.72 8.43,7.5Z"
  }));
};

ChiliMediumIcon.displayName = 'ChiliMediumIcon';
ChiliMediumIcon.defaultProps = {
  size: 24
};
var _default = ChiliMediumIcon;
exports["default"] = _default;