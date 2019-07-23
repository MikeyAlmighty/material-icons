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

var ControllerClassicOutlineIcon = function ControllerClassicOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.5,7C20.54,7 23,9.46 23,12.5C23,15.54 20.54,18 17.5,18C15.79,18 14.27,17.22 13.26,16H10.74C9.73,17.22 8.21,18 6.5,18C3.46,18 1,15.54 1,12.5C1,9.46 3.46,7 6.5,7H17.5M6.5,9C4.57,9 3,10.57 3,12.5C3,14.43 4.57,16 6.5,16C7.9,16 9.1,15.18 9.66,14H14.34C14.9,15.18 16.1,16 17.5,16C19.43,16 21,14.43 21,12.5C21,10.57 19.43,9 17.5,9H6.5M5.75,10.25H7.25V11.75H8.75V13.25H7.25V14.75H5.75V13.25H4.25V11.75H5.75V10.25M16.75,12.5C17.3,12.5 17.75,12.95 17.75,13.5C17.75,14.05 17.3,14.5 16.75,14.5C16.2,14.5 15.75,14.05 15.75,13.5C15.75,12.95 16.2,12.5 16.75,12.5M18.75,10.5C19.3,10.5 19.75,10.95 19.75,11.5C19.75,12.05 19.3,12.5 18.75,12.5C18.2,12.5 17.75,12.05 17.75,11.5C17.75,10.95 18.2,10.5 18.75,10.5Z"
  }));
};

ControllerClassicOutlineIcon.displayName = 'ControllerClassicOutlineIcon';
ControllerClassicOutlineIcon.defaultProps = {
  size: 24
};
var _default = ControllerClassicOutlineIcon;
exports["default"] = _default;