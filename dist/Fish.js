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

var FishIcon = function FishIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,20L12.76,17C9.5,16.79 6.59,15.4 5.75,13.58C5.66,14.06 5.53,14.5 5.33,14.83C4.67,16 3.33,16 2,16C3.1,16 3.5,14.43 3.5,12.5C3.5,10.57 3.1,9 2,9C3.33,9 4.67,9 5.33,10.17C5.53,10.5 5.66,10.94 5.75,11.42C6.4,10 8.32,8.85 10.66,8.32L9,5C11,5 13,5 14.33,5.67C15.46,6.23 16.11,7.27 16.69,8.38C19.61,9.08 22,10.66 22,12.5C22,14.38 19.5,16 16.5,16.66C15.67,17.76 14.86,18.78 14.17,19.33C13.33,20 12.67,20 12,20M17,11C16.45,11 16,11.45 16,12C16,12.55 16.45,13 17,13C17.55,13 18,12.55 18,12C18,11.45 17.55,11 17,11Z"
  }));
};

FishIcon.displayName = 'FishIcon';
FishIcon.defaultProps = {
  size: 24
};
var _default = FishIcon;
exports["default"] = _default;