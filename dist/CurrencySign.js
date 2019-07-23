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

var CurrencySignIcon = function CurrencySignIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,12C22,9.86 21.29,7.78 20,6.07L22,4.07L19.94,1.94L17.94,3.94C14.4,1.36 9.59,1.38 6.07,4L4.07,2L1.94,4.06L3.94,6.06C1.36,9.6 1.38,14.41 4,17.93L2,19.93L4.12,22.05L6.12,20.05C9.65,22.65 14.45,22.65 18,20.05L20,22.05L22.1,19.93L20.1,17.93C21.35,16.21 22,14.13 22,12M12,19C8.13,19 5,15.87 5,12C5,8.13 8.13,5 12,5C15.87,5 19,8.13 19,12C19,15.87 15.87,19 12,19Z"
  }));
};

CurrencySignIcon.displayName = 'CurrencySignIcon';
CurrencySignIcon.defaultProps = {
  size: 24
};
var _default = CurrencySignIcon;
exports["default"] = _default;