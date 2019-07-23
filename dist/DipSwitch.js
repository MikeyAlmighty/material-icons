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

var DipSwitchIcon = function DipSwitchIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,4H7C7.55,4 8,4.45 8,5V19C8,19.55 7.55,20 7,20H3C2.45,20 2,19.55 2,19V5C2,4.45 2.45,4 3,4M10,4H14C14.55,4 15,4.45 15,5V19C15,19.55 14.55,20 14,20H10C9.45,20 9,19.55 9,19V5C9,4.45 9.45,4 10,4M17,4H21C21.55,4 22,4.45 22,5V19C22,19.55 21.55,20 21,20H17C16.45,20 16,19.55 16,19V5C16,4.45 16.45,4 17,4M4,18H6V13H4V18M11,11H13V6H11V11M18,18H20V13H18V18Z"
  }));
};

DipSwitchIcon.displayName = 'DipSwitchIcon';
DipSwitchIcon.defaultProps = {
  size: 24
};
var _default = DipSwitchIcon;
exports["default"] = _default;