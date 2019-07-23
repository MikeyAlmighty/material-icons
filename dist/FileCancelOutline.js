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

var FileCancelOutlineIcon = function FileCancelOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14,2L20,8V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2H14M18,20V9H13V4H6V20H18M11.5,10C14,10 16,12 16,14.5C16,17 14,19 11.5,19C9,19 7,17 7,14.5C7,12 9,10 11.5,10M11.5,11.5C10.94,11.5 10.42,11.65 10,11.92L14.08,16C14.35,15.58 14.5,15.06 14.5,14.5C14.5,12.84 13.16,11.5 11.5,11.5M8.5,14.5C8.5,16.16 9.84,17.5 11.5,17.5C12.06,17.5 12.58,17.35 13,17.08L8.92,13C8.65,13.42 8.5,13.94 8.5,14.5Z"
  }));
};

FileCancelOutlineIcon.displayName = 'FileCancelOutlineIcon';
FileCancelOutlineIcon.defaultProps = {
  size: 24
};
var _default = FileCancelOutlineIcon;
exports["default"] = _default;