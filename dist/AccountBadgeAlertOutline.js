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

var AccountBadgeAlertOutlineIcon = function AccountBadgeAlertOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,3H12V5H15V21H5V5H8V3H5C3.9,3 3,3.9 3,5V21C3,22.1 3.9,23 5,23H15C16.1,23 17,22.1 17,21V5C17,3.9 16.1,3 15,3M10,7C11.1,7 12,7.9 12,9C12,10.1 11.1,11 10,11C8.9,11 8,10.1 8,9C8,7.9 8.9,7 10,7M14,15H6V14C6,12.67 8.67,12 10,12C11.33,12 14,12.67 14,14V15M14,18H6V17H14V18M10,20H6V19H10V20M11,5H9V1H11V5M19,12V7H21V12H19M19,16V14H21V16H19Z"
  }));
};

AccountBadgeAlertOutlineIcon.displayName = 'AccountBadgeAlertOutlineIcon';
AccountBadgeAlertOutlineIcon.defaultProps = {
  size: 24
};
var _default = AccountBadgeAlertOutlineIcon;
exports["default"] = _default;