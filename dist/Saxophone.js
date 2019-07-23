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

var SaxophoneIcon = function SaxophoneIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4,2C3.45,2 3,2.45 3,3C3,3.55 3.45,4 4,4C5.66,4 7,5.34 7,7V8.66L7,15.5C7,19.1 9.9,22 13.5,22C17.1,22 20,19.1 20,15.5V13C20.55,13 21,12.55 21,12C21,11.45 20.55,11 20,11H14C13.45,11 13,11.45 13,12C13,12.55 13.45,13 14,13V15C14,15.55 13.55,16 13,16C12.45,16 12,15.55 12,15V11C12.55,11 13,10.55 13,10C13,9.45 12.55,9 12,9V8C12.55,8 13,7.55 13,7C13,6.45 12.55,6 12,6V5.5C12,3.57 10.43,2 8.5,2H4Z"
  }));
};

SaxophoneIcon.displayName = 'SaxophoneIcon';
SaxophoneIcon.defaultProps = {
  size: 24
};
var _default = SaxophoneIcon;
exports["default"] = _default;