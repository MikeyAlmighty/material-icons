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

var ArrowDecisionAutoOutlineIcon = function ArrowDecisionAutoOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,15V12C18.5,12 14.5,12.16 14.05,16.2C15.61,16.75 16.43,18.47 15.88,20.03C15.33,21.59 13.61,22.41 12.05,21.86C10.5,21.3 9.67,19.59 10.22,18.03C10.5,17.17 11.2,16.5 12.05,16.2C12.34,12.61 15.4,9.88 19,10V7L23,11L19,15M14,19C14,18.45 13.55,18 13,18C12.45,18 12,18.45 12,19C12,19.55 12.45,20 13,20C13.55,20 14,19.55 14,19M12,11.12C12.58,10.46 13.25,9.89 14,9.43V5H17L13,1L9,5H12V11.12M7.2,6H5.2L2,15H3.9L4.6,13H7.8L8.5,15H10.4L7.2,6M5.05,11.65L6.2,8L7.35,11.65H5.05Z"
  }));
};

ArrowDecisionAutoOutlineIcon.displayName = 'ArrowDecisionAutoOutlineIcon';
ArrowDecisionAutoOutlineIcon.defaultProps = {
  size: 24
};
var _default = ArrowDecisionAutoOutlineIcon;
exports["default"] = _default;