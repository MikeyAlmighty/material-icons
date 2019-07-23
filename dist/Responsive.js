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

var ResponsiveIcon = function ResponsiveIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4,6V16H9V12C9,10.9 9.9,10 11,10H16C17.1,10 18,10.9 18,12V16H20V6H4M0,20V18H4C2.9,18 2,17.1 2,16V6C2,4.9 2.9,4 4,4H20C21.1,4 22,4.9 22,6V16C22,17.1 21.1,18 20,18H24V20H18V20C18,21.11 17.1,22 16,22H11C9.9,22 9,21.1 9,20H9L0,20M11.5,20C11.22,20 11,20.22 11,20.5C11,20.78 11.22,21 11.5,21C11.78,21 12,20.78 12,20.5C12,20.22 11.78,20 11.5,20M15.5,20C15.22,20 15,20.22 15,20.5C15,20.78 15.22,21 15.5,21C15.78,21 16,20.78 16,20.5C16,20.22 15.78,20 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z"
  }));
};

ResponsiveIcon.displayName = 'ResponsiveIcon';
ResponsiveIcon.defaultProps = {
  size: 24
};
var _default = ResponsiveIcon;
exports["default"] = _default;