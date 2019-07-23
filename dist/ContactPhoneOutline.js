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

var ContactPhoneOutlineIcon = function ContactPhoneOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22,3H2C0.9,3 0,3.9 0,5V19C0,20.1 0.9,21 2,21H22C23.1,21 24,20.1 24,19V5C24,3.9 23.1,3 22,3M22,19H2V5H22V19M19,18L21,16L19.5,14H17.85C17.63,13.37 17.5,12.7 17.5,12C17.5,11.3 17.63,10.63 17.85,10H19.5L21,8L19,6C17.7,7 16.73,8.38 16.28,10C16.1,10.64 16,11.31 16,12C16,12.69 16.1,13.36 16.28,14C16.73,15.61 17.7,17 19,18M9,12C10.66,12 12,10.66 12,9C12,7.34 10.66,6 9,6C7.34,6 6,7.34 6,9C6,10.66 7.34,12 9,12M9,8C9.55,8 10,8.45 10,9C10,9.55 9.55,10 9,10C8.45,10 8,9.55 8,9C8,8.45 8.45,8 9,8M15,16.59C15,14.09 11.03,13 9,13C6.97,13 3,14.09 3,16.59V18H15V16.59M5.5,16C6.22,15.5 7.7,15 9,15C10.3,15 11.77,15.5 12.5,16H5.5Z"
  }));
};

ContactPhoneOutlineIcon.displayName = 'ContactPhoneOutlineIcon';
ContactPhoneOutlineIcon.defaultProps = {
  size: 24
};
var _default = ContactPhoneOutlineIcon;
exports["default"] = _default;