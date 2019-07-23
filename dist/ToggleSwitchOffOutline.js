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

var ToggleSwitchOffOutlineIcon = function ToggleSwitchOffOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7,10C8.1,10 9,10.9 9,12C9,13.1 8.1,14 7,14C5.9,14 5,13.1 5,12C5,10.9 5.9,10 7,10M17,7C19.76,7 22,9.24 22,12C22,14.76 19.76,17 17,17H7C4.24,17 2,14.76 2,12C2,9.24 4.24,7 7,7H17M7,9C5.34,9 4,10.34 4,12C4,13.66 5.34,15 7,15H17C18.66,15 20,13.66 20,12C20,10.34 18.66,9 17,9H7Z"
  }));
};

ToggleSwitchOffOutlineIcon.displayName = 'ToggleSwitchOffOutlineIcon';
ToggleSwitchOffOutlineIcon.defaultProps = {
  size: 24
};
var _default = ToggleSwitchOffOutlineIcon;
exports["default"] = _default;