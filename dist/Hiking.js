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

var HikingIcon = function HikingIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9.8,8.9L7,23H9.1L10.9,15L13,17V23H15V15.5L12.9,13.5L13.5,10.5C14.63,11.81 16.29,12.73 18.15,12.95L16,23H17L20,9L19.04,8.8L18.58,11C16.86,10.85 15.44,9.89 14.7,8.6L13.7,7C13.5,6.65 13.2,6.37 12.84,6.2C12.5,6 12.08,5.96 11.68,6C11.28,6.09 10.92,6.27 10.63,6.55C10.34,6.83 10.14,7.19 10.06,7.58L9.8,8.9M7.08,6.92L9.4,7.38L8.4,12.46L6.08,12L7.08,6.92M13.5,5.5C14.6,5.5 15.5,4.6 15.5,3.5C15.5,2.4 14.6,1.5 13.5,1.5C12.4,1.5 11.5,2.4 11.5,3.5C11.5,4.6 12.4,5.5 13.5,5.5Z"
  }));
};

HikingIcon.displayName = 'HikingIcon';
HikingIcon.defaultProps = {
  size: 24
};
var _default = HikingIcon;
exports["default"] = _default;