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

var HumbleBundleIcon = function HumbleBundleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16.91,18.12C14.09,18.12 18.43,2.13 18.43,2.13H15.53C15.53,2.13 14.34,5.89 13.55,10.07H11.05C11.11,9.21 11.15,8.34 11.13,7.5C11,0.59 7,1.87 5.18,3.45C3.47,4.95 2.03,7.8 2,10C2.27,10 3.35,10 3.35,10C3.35,10 4.25,5.88 7.07,5.88C9.89,5.88 5.54,21.87 5.54,21.87H8.45C8.45,21.87 9.95,17.59 10.7,12.81L13.09,12.8C12.95,14.04 12.91,15.4 12.93,16.67C13.04,23.56 17.06,22.08 18.86,20.5C20.67,18.92 22,15.58 22,14H20.61C20.62,14.12 19.73,18.12 16.91,18.12V18.12Z"
  }));
};

HumbleBundleIcon.displayName = 'HumbleBundleIcon';
HumbleBundleIcon.defaultProps = {
  size: 24
};
var _default = HumbleBundleIcon;
exports["default"] = _default;