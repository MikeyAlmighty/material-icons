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

var RobotVacuumVariantIcon = function RobotVacuumVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,3C3.9,3 3,3.9 3,5V7H5V5H19V7H21V5C21,3.9 20.1,3 19,3H5M8,7V9H16V7H8M3,9V12C3,16.97 7.03,21 12,21C16.97,21 21,16.97 21,12V9H19V12C19,15.87 15.87,19 12,19C8.13,19 5,15.87 5,12V9H3M12,12C10.62,12 9.5,13.12 9.5,14.5C9.5,15.88 10.62,17 12,17C13.38,17 14.5,15.88 14.5,14.5C14.5,13.12 13.38,12 12,12Z"
  }));
};

RobotVacuumVariantIcon.displayName = 'RobotVacuumVariantIcon';
RobotVacuumVariantIcon.defaultProps = {
  size: 24
};
var _default = RobotVacuumVariantIcon;
exports["default"] = _default;