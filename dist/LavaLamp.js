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

var LavaLampIcon = function LavaLampIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10,3L8,16H16L14,3H10M11.5,5.75C11.91,5.75 12.25,6.09 12.25,6.5C12.25,6.91 11.91,7.25 11.5,7.25C11.09,7.25 10.75,6.91 10.75,6.5C10.75,6.09 11.09,5.75 11.5,5.75M12.5,8.5C13.05,8.5 13.5,8.95 13.5,9.5C13.5,10.05 13.05,10.5 12.5,10.5C11.95,10.5 11.5,10.05 11.5,9.5C11.5,8.95 11.95,8.5 12.5,8.5M11.5,12C12.33,12 13,12.67 13,13.5C13,14.33 12.33,15 11.5,15C10.67,15 10,14.33 10,13.5C10,12.67 10.67,12 11.5,12M8,17L10,19L8,21H16L14,19L16,17H8Z"
  }));
};

LavaLampIcon.displayName = 'LavaLampIcon';
LavaLampIcon.defaultProps = {
  size: 24
};
var _default = LavaLampIcon;
exports["default"] = _default;