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

var BulldozerIcon = function BulldozerIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4,4C3.45,4 3,4.45 3,5V10C2.54,10 2.14,10.31 2.03,10.76V13.97H2.29C2.65,13.37 3.3,13 4,13H13C13.7,13 14.35,13.37 14.71,13.97H16.03L16,11V11C16,10.45 15.55,10 15,10H13V8C13,7.45 12.55,7 12,7C11.45,7 11,7.45 11,8V10H9V5C9,4.45 8.55,4 8,4H4M5,6H7V10L7,11H5V6M17,11V19H22V18L19,17L18,11H17M4,15C2.9,15 2,15.9 2,17C2,18.1 2.9,19 4,19H13C14.1,19 15,18.1 15,17C15,15.9 14.1,15 13,15H4Z"
  }));
};

BulldozerIcon.displayName = 'BulldozerIcon';
BulldozerIcon.defaultProps = {
  size: 24
};
var _default = BulldozerIcon;
exports["default"] = _default;