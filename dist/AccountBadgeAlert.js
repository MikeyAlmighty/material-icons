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

var AccountBadgeAlertIcon = function AccountBadgeAlertIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,3H12V6H8V3H5C3.9,3 3,3.9 3,5V21C3,22.1 3.9,23 5,23H15C16.1,23 17,22.1 17,21V5C17,3.9 16.1,3 15,3M10,8C11.1,8 12,8.9 12,10C12,11.1 11.1,12 10,12C8.9,12 8,11.1 8,10C8,8.9 8.9,8 10,8M14,16H6V15C6,13.67 8.67,13 10,13C11.33,13 14,13.67 14,15V16M11,5H9V1H11V5M14,19H6V18H14V19M10,21H6V20H10V21M19,12V7H21V12H19M19,16V14H21V16H19Z"
  }));
};

AccountBadgeAlertIcon.displayName = 'AccountBadgeAlertIcon';
AccountBadgeAlertIcon.defaultProps = {
  size: 24
};
var _default = AccountBadgeAlertIcon;
exports["default"] = _default;