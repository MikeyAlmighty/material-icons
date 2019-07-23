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

var FoursquareIcon = function FoursquareIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17,5L16.57,7.5C16.5,7.73 16.2,8 15.91,8C15.61,8 12,8 12,8C11.53,8 10.95,8.32 10.95,8.79V9.2C10.95,9.67 11.53,10 12,10C12,10 14.95,10 15.28,10C15.61,10 15.93,10.36 15.86,10.71C15.79,11.07 14.94,13.28 14.9,13.5C14.86,13.67 14.64,14 14.25,14C13.92,14 11.37,14 11.37,14C10.85,14 10.69,14.07 10.34,14.5C10,14.94 7.27,18.1 7.27,18.1C7.24,18.13 7,18.04 7,18V5C7,4.7 7.61,4 8,4C8,4 16.17,4 16.5,4C16.82,4 17.08,4.61 17,5M17,14.45C17.11,13.97 18.78,6.72 19.22,4.55M17.58,2C17.58,2 8.38,2 6.91,2C5.43,2 5,3.11 5,3.8C5,4.5 5,20.76 5,20.76C5,21.54 5.42,21.84 5.66,21.93C5.9,22.03 6.55,22.11 6.94,21.66C6.94,21.66 11.65,16.22 11.74,16.13C11.87,16 11.87,16 12,16C12.26,16 14.2,16 15.26,16C16.63,16 16.85,15 17,14.45C17.11,13.97 18.78,6.72 19.22,4.55C19.56,2.89 19.14,2 17.58,2Z"
  }));
};

FoursquareIcon.displayName = 'FoursquareIcon';
FoursquareIcon.defaultProps = {
  size: 24
};
var _default = FoursquareIcon;
exports["default"] = _default;