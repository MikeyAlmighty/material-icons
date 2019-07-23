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

var GondolaIcon = function GondolaIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18,10H13V7.59L22.12,6.07L21.88,4.59L16.41,5.5C16.46,5.35 16.5,5.18 16.5,5C16.5,4.17 15.83,3.5 15,3.5C14.17,3.5 13.5,4.17 13.5,5C13.5,5.35 13.63,5.68 13.84,5.93L13,6.07V5H11V6.41L10.41,6.5C10.46,6.35 10.5,6.18 10.5,6C10.5,5.17 9.83,4.5 9,4.5C8.17,4.5 7.5,5.17 7.5,6C7.5,6.36 7.63,6.68 7.83,6.93L1.88,7.93L2.12,9.41L11,7.93V10H6C4.89,10 4,10.9 4,12V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18V12C20,10.9 19.1,10 18,10M6,12H8.25V16H6V12M9.75,16V12H14.25V16H9.75M18,16H15.75V12H18V16Z"
  }));
};

GondolaIcon.displayName = 'GondolaIcon';
GondolaIcon.defaultProps = {
  size: 24
};
var _default = GondolaIcon;
exports["default"] = _default;