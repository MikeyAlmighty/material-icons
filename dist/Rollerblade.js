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

var RollerbladeIcon = function RollerbladeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,15C19,15 19,16 17,16C15,16 4,16 4,16V3H11L11.21,4.5H9.24V6H11.43L11.64,7.5H9.24V9H11.86L12,10H14C14,10 19,10 19,15M5.5,17C4.12,17 3,18.12 3,19.5C3,20.88 4.12,22 5.5,22C6.88,22 8,20.88 8,19.5C8,18.12 6.88,17 5.5,17M17.5,17C16.12,17 15,18.12 15,19.5C15,20.88 16.12,22 17.5,22C18.88,22 20,20.88 20,19.5C20,18.12 18.88,17 17.5,17M11.5,17C10.12,17 9,18.12 9,19.5C9,20.88 10.12,22 11.5,22C12.88,22 14,20.88 14,19.5C14,18.12 12.88,17 11.5,17Z"
  }));
};

RollerbladeIcon.displayName = 'RollerbladeIcon';
RollerbladeIcon.defaultProps = {
  size: 24
};
var _default = RollerbladeIcon;
exports["default"] = _default;