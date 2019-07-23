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

var HelpRhombusOutlineIcon = function HelpRhombusOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21.5,10.8L13.2,2.5C12.5,1.8 11.5,1.8 10.8,2.5L2.5,10.8C1.8,11.5 1.8,12.5 2.5,13.2L10.8,21.5C11.5,22.2 12.5,22.2 13.2,21.5L21.5,13.2C22.1,12.5 22.1,11.5 21.5,10.8M20.3,12L12,20.3L3.7,12L12,3.7L20.3,12M11,15.5H12.5V17H11V15.5M12,6.95C14.7,7.06 15.87,9.78 14.28,11.81C13.86,12.31 13.19,12.64 12.85,13.07C12.5,13.5 12.5,14 12.5,14.5H11C11,13.65 11,12.94 11.35,12.44C11.68,11.94 12.35,11.64 12.77,11.31C14,10.18 13.68,8.59 12,8.46C11.18,8.46 10.5,9.13 10.5,9.97H9C9,8.3 10.35,6.95 12,6.95Z"
  }));
};

HelpRhombusOutlineIcon.displayName = 'HelpRhombusOutlineIcon';
HelpRhombusOutlineIcon.defaultProps = {
  size: 24
};
var _default = HelpRhombusOutlineIcon;
exports["default"] = _default;