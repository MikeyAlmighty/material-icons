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

var ZodiacAriesIcon = function ZodiacAriesIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16,2C14.95,2 13.91,2.27 13,2.81C12.64,3 12.3,3.26 12,3.54C11.7,3.26 11.36,3 11,2.81C10.09,2.27 9.05,2 8,2C4.69,2 2,4.69 2,8C2,11.31 4.69,14 8,14V12C5.79,12 4,10.21 4,8C4,5.79 5.79,4 8,4C9,4 10,4.39 10.75,5.1C10.84,5.18 10.92,5.27 11,5.36V22H13V5.36C13.08,5.27 13.16,5.18 13.25,5.1C14.85,3.58 17.38,3.64 18.91,5.25C20.43,6.85 20.36,9.38 18.76,10.9C18,11.61 17.03,12 16,12V14C19.31,14 22,11.31 22,8C22,4.69 19.31,2 16,2Z"
  }));
};

ZodiacAriesIcon.displayName = 'ZodiacAriesIcon';
ZodiacAriesIcon.defaultProps = {
  size: 24
};
var _default = ZodiacAriesIcon;
exports["default"] = _default;