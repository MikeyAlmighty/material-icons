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

var CameraPlusOutlineIcon = function CameraPlusOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21,6H17.8L16,4H10V6H15.1L17,8H21V20H5V11H3V20C3,21.1 3.9,22 5,22H21C22.1,22 23,21.1 23,20V8C23,6.9 22.1,6 21,6M8,14C8,18.45 13.39,20.69 16.54,17.54C19.69,14.39 17.45,9 13,9C10.24,9 8,11.24 8,14M13,11C14.64,11.05 15.95,12.36 16,14C15.95,15.64 14.64,16.95 13,17C11.36,16.95 10.05,15.64 10,14C10.05,12.36 11.36,11.05 13,11M5,6H8V4H5V1H3V4H0V6H3V9H5"
  }));
};

CameraPlusOutlineIcon.displayName = 'CameraPlusOutlineIcon';
CameraPlusOutlineIcon.defaultProps = {
  size: 24
};
var _default = CameraPlusOutlineIcon;
exports["default"] = _default;