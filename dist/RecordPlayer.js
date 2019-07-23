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

var RecordPlayerIcon = function RecordPlayerIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,17.5C5,17.78 4.78,18 4.5,18H3.5C3.22,18 3,17.78 3,17.5V17H2C1.45,17 1,16.55 1,16V13C1,12.45 1.45,12 2,12H19V10H7L6,11V9C6,8.45 6.45,8 7,8H19V7H21V8C21.55,8 22,8.45 22,9V10H21V12H22C22.55,12 23,12.45 23,13V16C23,16.55 22.55,17 22,17H21V17.5C21,17.78 20.78,18 20.5,18H19.5C19.22,18 19,17.78 19,17.5V17H5V17.5M3,14V15H5V14H3M6,14V15H8V14H6M20.5,13.5C19.95,13.5 19.5,13.95 19.5,14.5C19.5,15.05 19.95,15.5 20.5,15.5C21.05,15.5 21.5,15.05 21.5,14.5C21.5,13.95 21.05,13.5 20.5,13.5Z"
  }));
};

RecordPlayerIcon.displayName = 'RecordPlayerIcon';
RecordPlayerIcon.defaultProps = {
  size: 24
};
var _default = RecordPlayerIcon;
exports["default"] = _default;