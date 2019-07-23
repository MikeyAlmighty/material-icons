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

var CarMultipleIcon = function CarMultipleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8,11L9.5,6.5H18.5L20,11M18.5,16C17.67,16 17,15.33 17,14.5C17,13.67 17.67,13 18.5,13C19.33,13 20,13.67 20,14.5C20,15.33 19.33,16 18.5,16M9.5,16C8.67,16 8,15.33 8,14.5C8,13.67 8.67,13 9.5,13C10.33,13 11,13.67 11,14.5C11,15.33 10.33,16 9.5,16M19.92,6C19.71,5.4 19.14,5 18.5,5H9.5C8.86,5 8.29,5.4 8.08,6L6,12V20C6,20.55 6.45,21 7,21H8C8.55,21 9,20.55 9,20V19H19V20C19,20.55 19.45,21 20,21H21C21.55,21 22,20.55 22,20V12L19.92,6M14.92,3C14.71,2.4 14.14,2 13.5,2H4.5C3.86,2 3.29,2.4 3.08,3L1,9V17C1,17.55 1.45,18 2,18H3C3.55,18 4,17.55 4,17V12.91C3.22,12.63 2.82,11.77 3.1,11C3.32,10.4 3.87,10 4.5,10H4.57L5.27,8H3L4.5,3.5H15.09L14.92,3Z"
  }));
};

CarMultipleIcon.displayName = 'CarMultipleIcon';
CarMultipleIcon.defaultProps = {
  size: 24
};
var _default = CarMultipleIcon;
exports["default"] = _default;