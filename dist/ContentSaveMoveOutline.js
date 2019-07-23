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

var ContentSaveMoveOutlineIcon = function ContentSaveMoveOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H11.81C11.27,20.09 11,19.05 11,18C11,17.91 11,17.83 11,17.74C10.04,17.2 9.7,15.97 10.25,15C10.6,14.38 11.27,14 12,14C12.16,14 12.32,14 12.5,14.06C12.97,13.5 13.57,13.03 14.23,12.68C12.4,11.45 9.91,11.94 8.68,13.77C8.24,14.43 8,15.21 8,16C8,17.15 8.5,18.25 9.35,19H5V9H15V5H16.17L19,7.83V12.35C19.74,12.6 20.43,13 21,13.54V7L17,3M13,7H5V5H13V7M13,17H17V14L22,18.5L17,23V20H13V17"
  }));
};

ContentSaveMoveOutlineIcon.displayName = 'ContentSaveMoveOutlineIcon';
ContentSaveMoveOutlineIcon.defaultProps = {
  size: 24
};
var _default = ContentSaveMoveOutlineIcon;
exports["default"] = _default;