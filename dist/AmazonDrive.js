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

var AmazonDriveIcon = function AmazonDriveIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4.94,11.12C5.23,11.12 5.5,11.16 5.76,11.23C5.77,9.09 7.5,7.35 9.65,7.35C11.27,7.35 12.67,8.35 13.24,9.77C13.83,9 14.74,8.53 15.76,8.53C17.5,8.53 18.94,9.95 18.94,11.71C18.94,11.95 18.91,12.2 18.86,12.43C19.1,12.34 19.37,12.29 19.65,12.29C20.95,12.29 22,13.35 22,14.65C22,15.95 20.95,17 19.65,17C18.35,17 6.36,17 4.94,17C3.32,17 2,15.68 2,14.06C2,12.43 3.32,11.12 4.94,11.12Z"
  }));
};

AmazonDriveIcon.displayName = 'AmazonDriveIcon';
AmazonDriveIcon.defaultProps = {
  size: 24
};
var _default = AmazonDriveIcon;
exports["default"] = _default;