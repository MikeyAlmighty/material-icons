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

var OrnamentVariantIcon = function OrnamentVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,1C13.66,1 15,2.34 15,4V5C15.55,5 16,5.45 16,6V7.07C18.39,8.45 20,11.04 20,14C20,18.42 16.42,22 12,22C7.58,22 4,18.42 4,14C4,11.04 5.61,8.45 8,7.07V6C8,5.45 8.45,5 9,5V4C9,2.34 10.34,1 12,1M12,3C11.45,3 11,3.45 11,4V5H13V4C13,3.45 12.55,3 12,3M12,8C10.22,8 8.63,8.77 7.53,10H16.47C15.37,8.77 13.78,8 12,8M12,20C13.78,20 15.37,19.23 16.47,18H7.53C8.63,19.23 10.22,20 12,20M12,12C10.9,12 10,12.9 10,14C10,15.1 10.9,16 12,16C13.1,16 14,15.1 14,14C14,12.9 13.1,12 12,12M18,14C18,13.31 17.88,12.65 17.67,12C16.72,12.19 16,13 16,14C16,15 16.72,15.81 17.67,15.97C17.88,15.35 18,14.69 18,14M6,14C6,14.69 6.12,15.35 6.33,15.97C7.28,15.81 8,15 8,14C8,13 7.28,12.19 6.33,12C6.12,12.65 6,13.31 6,14Z"
  }));
};

OrnamentVariantIcon.displayName = 'OrnamentVariantIcon';
OrnamentVariantIcon.defaultProps = {
  size: 24
};
var _default = OrnamentVariantIcon;
exports["default"] = _default;