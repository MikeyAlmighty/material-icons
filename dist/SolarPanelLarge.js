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

var SolarPanelLargeIcon = function SolarPanelLargeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,6H6V3H3V6M8,3V6H11V3H8M13,3V6H16V3H13M18,3V6H21V3H18M21,8H18V11H21V8M21,13H18V16H21V13M16,16V13H13V16H16M11,16V13H8V16H11M6,16V13H3V16H6M3,11H6V8H3V11M13,8V11H16V8H13M8,8V11H11V8H8M3,1H21C22.1,1 23,1.9 23,3V16C23,17.1 22.1,18 21,18H15V21H18V23H13V18H11V23H6V21H9V18H3C1.9,18 1,17.1 1,16V3C1,1.9 1.9,1 3,1Z"
  }));
};

SolarPanelLargeIcon.displayName = 'SolarPanelLargeIcon';
SolarPanelLargeIcon.defaultProps = {
  size: 24
};
var _default = SolarPanelLargeIcon;
exports["default"] = _default;