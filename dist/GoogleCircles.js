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

var GoogleCirclesIcon = function GoogleCirclesIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16.66,15H17C18,15 19,14.8 19.87,14.46C19.17,18.73 15.47,22 11,22C6,22 2,17.97 2,13C2,8.53 5.27,4.83 9.54,4.13C9.2,5 9,6 9,7V7.34C6.68,8.16 5,10.38 5,13C5,16.31 7.69,19 11,19C13.62,19 15.84,17.32 16.66,15M17,10C18.66,10 20,8.66 20,7C20,5.34 18.66,4 17,4C15.34,4 14,5.34 14,7C14,8.66 15.34,10 17,10M17,1C20.31,1 23,3.69 23,7C23,10.31 20.31,13 17,13C13.69,13 11,10.31 11,7C11,3.68 13.69,1 17,1Z"
  }));
};

GoogleCirclesIcon.displayName = 'GoogleCirclesIcon';
GoogleCirclesIcon.defaultProps = {
  size: 24
};
var _default = GoogleCirclesIcon;
exports["default"] = _default;