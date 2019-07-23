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

var GhostOffIcon = function GhostOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,3.27L3.28,2L22,20.72L20.73,22L17.87,19.13L15,22L12,19L9,22L6,19L3,22V11C3,9.09 3.59,7.33 4.6,5.87L2,3.27M12,2C16.97,2 21,6.03 21,11V17.18L15.7,11.88C16.46,11.59 17,10.86 17,10C17,8.9 16.1,8 15,8C14.14,8 13.41,8.54 13.13,9.3L7.2,3.38C8.59,2.5 10.24,2 12,2M7,10C7,11.1 7.9,12 9,12C9.5,12 9.93,11.83 10.27,11.54L7.46,8.73C7.17,9.07 7,9.5 7,10Z"
  }));
};

GhostOffIcon.displayName = 'GhostOffIcon';
GhostOffIcon.defaultProps = {
  size: 24
};
var _default = GhostOffIcon;
exports["default"] = _default;