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

var DotsHorizontalCircleIcon = function DotsHorizontalCircleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,10.5C11.17,10.5 10.5,11.17 10.5,12C10.5,12.83 11.17,13.5 12,13.5C12.83,13.5 13.5,12.83 13.5,12C13.5,11.17 12.83,10.5 12,10.5M6.5,10.5C5.67,10.5 5,11.17 5,12C5,12.83 5.67,13.5 6.5,13.5C7.33,13.5 8,12.83 8,12C8,11.17 7.33,10.5 6.5,10.5M17.5,10.5C16.67,10.5 16,11.17 16,12C16,12.83 16.67,13.5 17.5,13.5C18.33,13.5 19,12.83 19,12C19,11.17 18.33,10.5 17.5,10.5Z"
  }));
};

DotsHorizontalCircleIcon.displayName = 'DotsHorizontalCircleIcon';
DotsHorizontalCircleIcon.defaultProps = {
  size: 24
};
var _default = DotsHorizontalCircleIcon;
exports["default"] = _default;