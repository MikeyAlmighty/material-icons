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

var WifiStrength1LockIcon = function WifiStrength1LockIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,3C16.22,3 20.32,4.41 23.65,7L21.54,9.62L20.5,9.5C19.93,9.5 19.37,9.6 18.83,9.79L20.71,7.45C18.08,5.86 15.07,5 12,5C8.92,5 5.91,5.85 3.27,7.44L8.39,13.8C9.5,13.28 10.75,13 12,13C13.23,13 14.44,13.28 15.55,13.79L15.5,14.5V17.14L12,21.5L0.38,7C3.7,4.42 7.79,3 12,3M23,16C23.5,16 24,16.5 24,17V21C24,21.5 23.5,22 23,22H18C17.5,22 17,21.5 17,21V17C17,16.5 17.5,16 18,16V14.5C18,13.1 19.1,12 20.5,12C21.9,12 23,13.1 23,14.5V16M22,16V14.5C22,13.7 21.3,13 20.5,13C19.7,13 19,13.7 19,14.5V16H22Z"
  }));
};

WifiStrength1LockIcon.displayName = 'WifiStrength1LockIcon';
WifiStrength1LockIcon.defaultProps = {
  size: 24
};
var _default = WifiStrength1LockIcon;
exports["default"] = _default;