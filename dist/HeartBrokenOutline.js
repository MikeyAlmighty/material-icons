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

var HeartBrokenOutlineIcon = function HeartBrokenOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.5,5C7.7,5 7.9,5 8.1,5.1L10.5,9.2L6.8,13.8C5.1,11.8 4,10.2 4,8.5C4,6.5 5.5,5 7.5,5M7.5,3C4.4,3 2,5.4 2,8.5C2,12.3 5.4,15.4 10.6,20L12,21.3L9,14.3L13,9.3L9.4,3.3C8.8,3.1 8.2,3 7.5,3M16.5,5C18.5,5 20,6.5 20,8.5C20,11.1 17.4,13.7 13.4,17.3L13.1,15L17.9,9.7L15.6,5.2C15.9,5 16.2,5 16.5,5M16.5,3C15.2,3 13.9,3.5 12.9,4.3L15.5,9.4L11,14.4L12,21.4L13.4,20.1C18.6,15.4 22,12.3 22,8.6C22,5.4 19.6,3 16.5,3Z"
  }));
};

HeartBrokenOutlineIcon.displayName = 'HeartBrokenOutlineIcon';
HeartBrokenOutlineIcon.defaultProps = {
  size: 24
};
var _default = HeartBrokenOutlineIcon;
exports["default"] = _default;