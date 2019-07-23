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

var EmberIcon = function EmberIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,14.22C22,14.22 17.61,17.35 14.72,17.39C11.84,17.44 12.13,15.56 12.13,15.56C12.13,15.56 22.71,11.94 19.83,4.79C18.53,2.95 17,2.37 14.89,2.42C12.76,2.46 10.17,3.76 8.46,7.6C7.64,9.44 7.41,11.18 7.24,12.5V12.5C7.24,12.5 5.32,12.88 4.32,12.04C3.32,11.2 2.77,12.04 2.77,12.04C2.77,12.04 1.03,14.2 2.75,14.87C4.46,15.54 7.12,15.82 7.12,15.82V15.82C7.36,17 8.08,19 10.17,20.6C13.3,23 19.32,20.4 19.32,20.4M11.63,12.33C11.76,7.36 15,5.18 16.15,6.27C17.27,7.36 16.86,9.7 14.72,11.16C12.59,12.63 11.63,12.33 11.63,12.33Z"
  }));
};

EmberIcon.displayName = 'EmberIcon';
EmberIcon.defaultProps = {
  size: 24
};
var _default = EmberIcon;
exports["default"] = _default;