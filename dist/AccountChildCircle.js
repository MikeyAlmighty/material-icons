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

var AccountChildCircleIcon = function AccountChildCircleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,12C12.83,12 13.5,12.67 13.5,13.5C13.5,14.33 12.83,15 12,15C11.17,15 10.5,14.33 10.5,13.5C10.5,12.67 11.17,12 12,12M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,16C12.72,16 13.4,16.15 14.04,16.5C14.68,16.8 15,17.2 15,17.67V19.41C16.34,18.81 17,18.08 17,17.2V12.8C17,12 16.5,11.35 15.45,10.8C14.4,10.26 13.25,10 12,10C10.75,10 9.6,10.26 8.55,10.8C7.5,11.35 7,12 7,12.8V17.2C7,18 7.53,18.69 8.63,19.22C9.72,19.75 10.84,20 12,20L13,19.92V17.91L12,18C11,18 10,17.8 9.05,17.39C9.17,17 9.53,16.69 10.13,16.41C10.72,16.13 11.34,16 12,16M12,4C10.62,4 9.5,5.12 9.5,6.5C9.5,7.88 10.62,9 12,9C13.38,9 14.5,7.88 14.5,6.5C14.5,5.12 13.38,4 12,4Z"
  }));
};

AccountChildCircleIcon.displayName = 'AccountChildCircleIcon';
AccountChildCircleIcon.defaultProps = {
  size: 24
};
var _default = AccountChildCircleIcon;
exports["default"] = _default;