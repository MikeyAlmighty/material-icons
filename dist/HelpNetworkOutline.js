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

var HelpNetworkOutlineIcon = function HelpNetworkOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,20C15,19.45 14.55,19 14,19H13V17H17C18.1,17 19,16.1 19,15V5C19,3.9 18.1,3 17,3H7C5.9,3 5,3.9 5,5V15C5,16.1 5.9,17 7,17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H22V20H15M7,15V5H17V15H7M11.95,6C11.17,6 10.55,6.18 10.07,6.5C9.61,6.89 9.38,7.4 9.39,8.1L9.4,8.13H11.11C11.12,7.86 11.2,7.65 11.36,7.5C11.5,7.38 11.72,7.31 11.95,7.31C12.22,7.31 12.45,7.4 12.61,7.56C12.77,7.73 12.85,7.96 12.85,8.22C12.85,8.5 12.78,8.75 12.64,8.95C12.5,9.16 12.33,9.33 12.1,9.5C11.65,9.78 11.34,10.05 11.17,10.29C11,10.5 10.89,10.89 10.89,11.33H12.67C12.67,11.06 12.7,10.84 12.78,10.68C12.86,10.5 13,10.36 13.24,10.21C13.64,10 13.97,9.74 14.22,9.39C14.5,9.03 14.62,8.67 14.62,8.22C14.62,7.55 14.38,7 13.9,6.61C13.42,6.2 12.77,6 11.95,6M10.89,12.22V14H12.67V12.22H10.89Z"
  }));
};

HelpNetworkOutlineIcon.displayName = 'HelpNetworkOutlineIcon';
HelpNetworkOutlineIcon.defaultProps = {
  size: 24
};
var _default = HelpNetworkOutlineIcon;
exports["default"] = _default;