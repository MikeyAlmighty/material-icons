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

var EmoticonCryOutlineIcon = function EmoticonCryOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.57,20C6.23,20 5.14,18.91 5.14,17.57C5.14,16.5 6.32,14.5 7.57,12.81C8.82,14.5 10,16.5 10,17.57C10,18.91 8.91,20 7.57,20M12,2C6.48,2 2,6.48 2,12C2,13.75 2.45,15.38 3.24,16.81C3.4,16 3.81,15.07 4.31,14.17C4.11,13.5 4,12.75 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20C11.76,20 11.53,20 11.29,19.96C10.82,20.7 10.14,21.28 9.34,21.63C10.19,21.87 11.08,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,14C11.59,14 11.19,14.04 10.81,14.12C11.16,14.75 11.47,15.4 11.69,16C11.79,16 11.89,16 12,16C13.25,16 14.32,16.5 14.77,17.23L16.19,15.81C15.29,14.72 13.75,14 12,14M15.5,8C14.7,8 14,8.7 14,9.5C14,10.3 14.7,11 15.5,11C16.3,11 17,10.3 17,9.5C17,8.7 16.3,8 15.5,8M10,9.5C10,8.7 9.3,8 8.5,8C7.7,8 7,8.7 7,9.5C7,10.3 7.7,11 8.5,11C9.3,11 10,10.3 10,9.5"
  }));
};

EmoticonCryOutlineIcon.displayName = 'EmoticonCryOutlineIcon';
EmoticonCryOutlineIcon.defaultProps = {
  size: 24
};
var _default = EmoticonCryOutlineIcon;
exports["default"] = _default;