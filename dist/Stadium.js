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

var StadiumIcon = function StadiumIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,3H7L10,5L7,7V8.33C8.47,8.12 10.18,8 12,8C13.82,8 15.53,8.12 17,8.33V3H19L22,5L19,7V8.71C20.85,9.17 22,9.8 22,10.5C22,11.88 17.5,13 12,13C6.5,13 2,11.88 2,10.5C2,9.8 3.15,9.17 5,8.71V3M12,9.5C8.69,9.5 7,9.67 7,10.5C7,11.33 8.69,11.5 12,11.5C15.31,11.5 17,11.33 17,10.5C17,9.67 15.31,9.5 12,9.5M12,14.75C15.81,14.75 19.2,14.08 21.4,13.05L20,21H15V19C15,17.9 14.1,17 13,17H11C9.9,17 9,17.9 9,19V21H4L2.6,13.05C4.8,14.08 8.19,14.75 12,14.75Z"
  }));
};

StadiumIcon.displayName = 'StadiumIcon';
StadiumIcon.defaultProps = {
  size: 24
};
var _default = StadiumIcon;
exports["default"] = _default;