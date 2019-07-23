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

var ControllerClassicIcon = function ControllerClassicIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,7H18C20.76,7 23,9.24 23,12C23,14.76 20.76,17 18,17C16.36,17 14.91,16.21 14,15H10C9.09,16.21 7.64,17 6,17C3.24,17 1,14.76 1,12C1,9.24 3.24,7 6,7M19.75,9.5C19.06,9.5 18.5,10.06 18.5,10.75C18.5,11.44 19.06,12 19.75,12C20.44,12 21,11.44 21,10.75C21,10.06 20.44,9.5 19.75,9.5M17.25,12C16.56,12 16,12.56 16,13.25C16,13.94 16.56,14.5 17.25,14.5C17.94,14.5 18.5,13.94 18.5,13.25C18.5,12.56 17.94,12 17.25,12M5,9V11H3V13H5V15H7V13H9V11H7V9H5Z"
  }));
};

ControllerClassicIcon.displayName = 'ControllerClassicIcon';
ControllerClassicIcon.defaultProps = {
  size: 24
};
var _default = ControllerClassicIcon;
exports["default"] = _default;