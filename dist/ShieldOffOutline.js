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

var ShieldOffOutlineIcon = function ShieldOffOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M1,4.27L3,6.27V11C3,16.55 6.84,21.74 12,23C13.87,22.54 15.57,21.56 16.97,20.24L19.23,22.5L20.5,21.22L2.28,3L1,4.27M12,21C8.25,20 5,15.54 5,11.22V8.27L15.59,18.86C14.53,19.89 13.3,20.65 12,21M21,5V11C21,13.28 20.35,15.5 19.23,17.4L17.77,15.95C18.54,14.5 19,12.84 19,11.22V6.3L12,3.18L7.16,5.34L5.65,3.82L12,1L21,5Z"
  }));
};

ShieldOffOutlineIcon.displayName = 'ShieldOffOutlineIcon';
ShieldOffOutlineIcon.defaultProps = {
  size: 24
};
var _default = ShieldOffOutlineIcon;
exports["default"] = _default;