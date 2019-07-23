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

var FishbowlIcon = function FishbowlIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19.11,5H21V3H3V5H4.89C3.11,6.8 2,9.27 2,12C2,15.97 4.31,19.39 7.66,21H16.34C19.69,19.39 22,15.97 22,12C22,9.27 20.89,6.8 19.11,5M13.25,17C12.09,17 11.06,16.64 10.33,16.17C9.67,17 8.33,17 7,17C8.1,17 8.5,15.88 8.5,14.5C8.5,13.12 8.1,12 7,12C8.33,12 9.67,12 10.37,12.91C11.06,12.36 12.09,12 13.25,12C15.32,12 17,13.12 17,14.5C17,15.88 15.32,17 13.25,17M16,7C13.56,8.71 10.44,8.71 8,7C7.06,7.66 6,8.09 4.95,8.25C5.31,7.58 5.77,6.96 6.32,6.41L7.7,5H16.3L17.68,6.41C18.23,6.96 18.69,7.58 19.05,8.25C18,8.09 16.94,7.66 16,7Z"
  }));
};

FishbowlIcon.displayName = 'FishbowlIcon';
FishbowlIcon.defaultProps = {
  size: 24
};
var _default = FishbowlIcon;
exports["default"] = _default;