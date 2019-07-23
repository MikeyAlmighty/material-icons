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

var AccountClockIcon = function AccountClockIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10.63,14.1C12.23,10.58 16.38,9.03 19.9,10.63C23.42,12.23 24.97,16.38 23.37,19.9C22.24,22.4 19.75,24 17,24C14.3,24 11.83,22.44 10.67,20H1V18C1.06,16.86 1.84,15.93 3.34,15.18C4.84,14.43 6.72,14.04 9,14C9.57,14 10.11,14.05 10.63,14.1V14.1M9,4C10.12,4.03 11.06,4.42 11.81,5.17C12.56,5.92 12.93,6.86 12.93,8C12.93,9.14 12.56,10.08 11.81,10.83C11.06,11.58 10.12,11.95 9,11.95C7.88,11.95 6.94,11.58 6.19,10.83C5.44,10.08 5.07,9.14 5.07,8C5.07,6.86 5.44,5.92 6.19,5.17C6.94,4.42 7.88,4.03 9,4M17,22C19.76,22 22,19.76 22,17C22,14.24 19.76,12 17,12C14.24,12 12,14.24 12,17C12,19.76 14.24,22 17,22M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14Z"
  }));
};

AccountClockIcon.displayName = 'AccountClockIcon';
AccountClockIcon.defaultProps = {
  size: 24
};
var _default = AccountClockIcon;
exports["default"] = _default;