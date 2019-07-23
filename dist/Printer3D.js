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

var Printer3DIcon = function Printer3DIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,6C19.55,6 20,5.55 20,5C20,4.45 19.55,4 19,4C18.45,4 18,4.45 18,5C18,5.55 18.45,6 19,6M19,2C20.66,2 22,3.34 22,5V11H18V7H6V11H2V5C2,3.34 3.34,2 5,2H19M18,18.25C18,18.63 17.79,18.96 17.47,19.13L12.57,21.82C12.4,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L6.53,19.13C6.21,18.96 6,18.63 6,18.25V13C6,12.62 6.21,12.29 6.53,12.12L11.43,9.68C11.59,9.56 11.79,9.5 12,9.5C12.21,9.5 12.4,9.56 12.57,9.68L17.47,12.12C17.79,12.29 18,12.62 18,13V18.25M12,11.65L9.04,13L12,14.6L14.96,13L12,11.65M8,17.66L11,19.29V16.33L8,14.71V17.66M16,17.66V14.71L13,16.33V19.29L16,17.66Z"
  }));
};

Printer3DIcon.displayName = 'Printer3DIcon';
Printer3DIcon.defaultProps = {
  size: 24
};
var _default = Printer3DIcon;
exports["default"] = _default;