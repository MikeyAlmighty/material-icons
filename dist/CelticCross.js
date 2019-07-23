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

var CelticCrossIcon = function CelticCrossIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.8,8C17.26,5.89 15.61,4.24 13.5,3.7V2H10.5V3.7C8.39,4.24 6.74,5.89 6.2,8H4V11H6.2C6.74,13.11 8.39,14.76 10.5,15.3V22H13.5V15.3C15.61,14.76 17.26,13.11 17.8,11H19.97V8H17.8M12.04,9.53L14.5,11H15.76C15.35,12.03 14.53,12.84 13.5,13.26V12L12.06,9.56L12,9.5L11.94,9.56L10.5,12V13.26C9.47,12.84 8.66,12.03 8.24,11H9.5L11.96,9.53L12,9.5H11.96L9.5,8H8.24C8.65,6.97 9.47,6.16 10.5,5.74V7L11.94,9.44L12,9.5L12.06,9.44L13.5,7V5.74C14.53,6.16 15.35,6.97 15.76,8H14.5L12.04,9.5H12L12.04,9.53Z"
  }));
};

CelticCrossIcon.displayName = 'CelticCrossIcon';
CelticCrossIcon.defaultProps = {
  size: 24
};
var _default = CelticCrossIcon;
exports["default"] = _default;