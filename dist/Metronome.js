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

var MetronomeIcon = function MetronomeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,1.75L8.57,2.67L4.06,19.53C4.03,19.68 4,19.84 4,20C4,21.11 4.89,22 6,22H18C19.11,22 20,21.11 20,20C20,19.84 19.97,19.68 19.94,19.53L18.58,14.42L17,16L17.2,17H13.41L16.25,14.16L14.84,12.75L10.59,17H6.8L10.29,4H13.71L15.17,9.43L16.8,7.79L15.43,2.67L12,1.75M11.25,5V14.75L12.75,13.25V5H11.25M19.79,7.8L16.96,10.63L16.25,9.92L14.84,11.34L17.66,14.16L19.08,12.75L18.37,12.04L21.2,9.21L19.79,7.8Z"
  }));
};

MetronomeIcon.displayName = 'MetronomeIcon';
MetronomeIcon.defaultProps = {
  size: 24
};
var _default = MetronomeIcon;
exports["default"] = _default;