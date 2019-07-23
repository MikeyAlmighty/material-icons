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

var AlienIcon = function AlienIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,3C16.97,3 21,6.58 21,11C21,15.42 15,21 12,21C9,21 3,15.42 3,11C3,6.58 7.03,3 12,3M10.31,10.93C9.29,9.29 7.47,8.58 6.25,9.34C5.03,10.1 4.87,12.05 5.89,13.69C6.92,15.33 8.74,16.04 9.96,15.28C11.18,14.5 11.33,12.57 10.31,10.93M13.69,10.93C12.67,12.57 12.82,14.5 14.04,15.28C15.26,16.04 17.08,15.33 18.11,13.69C19.13,12.05 18.97,10.1 17.75,9.34C16.53,8.58 14.71,9.29 13.69,10.93M12,17.75C10,17.75 9.5,17 9.5,17C9.5,17.03 10,19 12,19C14,19 14.5,17 14.5,17C14.5,17 14,17.75 12,17.75Z"
  }));
};

AlienIcon.displayName = 'AlienIcon';
AlienIcon.defaultProps = {
  size: 24
};
var _default = AlienIcon;
exports["default"] = _default;