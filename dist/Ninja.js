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

var NinjaIcon = function NinjaIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.75,13C7.74,12.65 7.9,12.31 8.17,12.08C8.92,12.24 9.62,12.55 10.25,13C10.25,13.68 9.69,14.24 9,14.24C8.31,14.24 7.76,13.69 7.75,13M13.75,13C14.38,12.56 15.08,12.25 15.83,12.09C16.1,12.32 16.26,12.66 16.25,13C16.25,13.7 15.69,14.26 15,14.26C14.31,14.26 13.75,13.7 13.75,13V13M12,9C9.23,8.96 6.5,9.65 4.07,11L4,12C4,13.23 4.29,14.44 4.84,15.54C7.21,15.18 9.6,15 12,15C14.4,15 16.79,15.18 19.16,15.54C19.71,14.44 20,13.23 20,12L19.93,11C17.5,9.65 14.77,8.96 12,9M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z"
  }));
};

NinjaIcon.displayName = 'NinjaIcon';
NinjaIcon.defaultProps = {
  size: 24
};
var _default = NinjaIcon;
exports["default"] = _default;