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

var CreditCardMarkerIcon = function CreditCardMarkerIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13.5,18H4V12H14.3C15.3,10.8 16.8,10 18.5,10C19.8,10 21,10.5 22,11.3V6C22,4.9 21.1,4 20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H14.6C14.2,19.4 13.8,18.7 13.5,18M4,6H20V8H4V6M18.5,12C16.6,12 15,13.6 15,15.5C15,18.1 18.5,22 18.5,22C18.5,22 22,18.1 22,15.5C22,13.6 20.4,12 18.5,12M18.5,16.8C17.8,16.8 17.3,16.2 17.3,15.6C17.3,14.9 17.9,14.4 18.5,14.4C19.1,14.4 19.7,15 19.7,15.6C19.8,16.2 19.2,16.8 18.5,16.8Z"
  }));
};

CreditCardMarkerIcon.displayName = 'CreditCardMarkerIcon';
CreditCardMarkerIcon.defaultProps = {
  size: 24
};
var _default = CreditCardMarkerIcon;
exports["default"] = _default;