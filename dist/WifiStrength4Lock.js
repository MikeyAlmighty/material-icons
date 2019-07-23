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

var WifiStrength4LockIcon = function WifiStrength4LockIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,3C7.79,3 3.7,4.42 0.38,7C4.42,12.06 7.89,16.37 12,21.5C13.23,19.97 14.29,18.66 15.5,17.14V14.5C15.5,11.74 17.74,9.5 20.5,9.5C20.85,9.5 21.2,9.54 21.54,9.62C22.2,8.8 23.03,7.76 23.65,7C20.32,4.41 16.22,3 12,3M20.5,12C19.1,12 18,13.1 18,14.5V16C17.5,16 17,16.5 17,17V21C17,21.5 17.5,22 18,22H23C23.5,22 24,21.5 24,21V17C24,16.5 23.5,16 23,16V14.5C23,13.1 21.9,12 20.5,12M20.5,13C21.3,13 22,13.7 22,14.5V16H19V14.5C19,13.7 19.7,13 20.5,13Z"
  }));
};

WifiStrength4LockIcon.displayName = 'WifiStrength4LockIcon';
WifiStrength4LockIcon.defaultProps = {
  size: 24
};
var _default = WifiStrength4LockIcon;
exports["default"] = _default;