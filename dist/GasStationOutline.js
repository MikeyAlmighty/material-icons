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

var GasStationOutlineIcon = function GasStationOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19.77,7.23L19.78,7.22L16.06,3.5L15,4.56L17.11,6.67C16.17,7.03 15.5,7.93 15.5,9C15.5,10.38 16.62,11.5 18,11.5C18.36,11.5 18.69,11.42 19,11.29V18.5C19,19.05 18.55,19.5 18,19.5C17.45,19.5 17,19.05 17,18.5V14C17,12.9 16.1,12 15,12H14V5C14,3.9 13.1,3 12,3H6C4.9,3 4,3.9 4,5V21H14V13.5H15.5V18.5C15.5,19.88 16.62,21 18,21C19.38,21 20.5,19.88 20.5,18.5V9C20.5,8.31 20.22,7.68 19.77,7.23M12,13.5V19H6V12H12V13.5M12,10H6V5H12V10M18,10C17.45,10 17,9.55 17,9C17,8.45 17.45,8 18,8C18.55,8 19,8.45 19,9C19,9.55 18.55,10 18,10Z"
  }));
};

GasStationOutlineIcon.displayName = 'GasStationOutlineIcon';
GasStationOutlineIcon.defaultProps = {
  size: 24
};
var _default = GasStationOutlineIcon;
exports["default"] = _default;