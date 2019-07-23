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

var TankIcon = function TankIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,12H4V11H6L7,6H12L13,11H20V12M13.22,7L13.62,9H22V7H13.22M22,16C22,17.66 20.66,19 19,19H5C3.34,19 2,17.66 2,16C2,14.34 3.34,13 5,13H19C20.66,13 22,14.34 22,16M6,16C6,15.45 5.55,15 5,15C4.45,15 4,15.45 4,16C4,16.55 4.45,17 5,17C5.55,17 6,16.55 6,16M13,16C13,15.45 12.55,15 12,15C11.45,15 11,15.45 11,16C11,16.55 11.45,17 12,17C12.55,17 13,16.55 13,16M20,16C20,15.45 19.55,15 19,15C18.45,15 18,15.45 18,16C18,16.55 18.45,17 19,17C19.55,17 20,16.55 20,16Z"
  }));
};

TankIcon.displayName = 'TankIcon';
TankIcon.defaultProps = {
  size: 24
};
var _default = TankIcon;
exports["default"] = _default;