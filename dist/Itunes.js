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

var ItunesIcon = function ItunesIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.85,17.07C7.03,17.17 3.5,17.67 4.06,20.26C4.69,23.3 9.87,22.59 9.83,19C9.81,16.57 9.83,9.2 9.83,9.2C9.83,9.2 9.76,8.53 10.43,8.39L18.19,6.79C18.19,6.79 18.83,6.65 18.83,7.29C18.83,7.89 18.83,14.2 18.83,14.2C18.83,14.2 18.9,14.83 18.12,15C17.34,15.12 13.91,15.4 14.19,18C14.5,21.07 20,20.65 20,17.07V2.61C20,2.61 20.04,1.62 18.9,1.87L9.5,3.78C9.5,3.78 8.66,3.96 8.66,4.77C8.66,5.5 8.66,16.11 8.66,16.11C8.66,16.11 8.66,16.96 7.85,17.07Z"
  }));
};

ItunesIcon.displayName = 'ItunesIcon';
ItunesIcon.defaultProps = {
  size: 24
};
var _default = ItunesIcon;
exports["default"] = _default;