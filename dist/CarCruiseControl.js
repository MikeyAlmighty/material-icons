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

var CarCruiseControlIcon = function CarCruiseControlIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,15C22,17.6 20.8,19.9 18.9,21.3L18.4,20.8L16.3,18.7L17.7,17.3L18.9,18.5C19.4,17.8 19.8,16.9 19.9,16H18V14H19.9C19.7,13.1 19.4,12.3 18.9,11.5L17.7,12.7L16.3,11.3L17.5,10.1C16.8,9.6 15.9,9.2 15,9.1V11H13V9.1C12.1,9.3 11.3,9.6 10.5,10.1L13.5,13.1C13.7,13.1 13.8,13 14,13C15.1,13 16,13.9 16,15C16,16.1 15.1,17 14,17C12.9,17 12,16.1 12,15C12,14.8 12,14.7 12.1,14.5L9.1,11.5C8.6,12.2 8.2,13.1 8.1,14H10V16H8.1C8.3,16.9 8.6,17.7 9.1,18.5L10.3,17.3L11.7,18.7L9.1,21.3C7.2,19.9 6,17.6 6,15C6,10.58 9.58,7 14,7C18.42,7 22,10.58 22,15M6.7,5.3L3.4,2L2,3.4L5.3,6.7L4,8H8V4L6.7,5.3Z"
  }));
};

CarCruiseControlIcon.displayName = 'CarCruiseControlIcon';
CarCruiseControlIcon.defaultProps = {
  size: 24
};
var _default = CarCruiseControlIcon;
exports["default"] = _default;