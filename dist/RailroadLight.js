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

var RailroadLightIcon = function RailroadLightIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.67,10.5C16.4,10.5 15.27,11.3 14.85,12.5H13.17V7.77L16.66,9.86L17.66,8.14L14.11,6L17.68,3.86L16.68,2.14L13.17,4.23V2H11.17V4.23L7.68,2.14L6.68,3.86L10.23,6L6.66,8.14L7.66,9.86L11.17,7.77V12.5H9.5C8.36,9.32 3.66,10.13 3.66,13.5C3.66,16.87 8.36,17.68 9.5,14.5H11.17V20C10.07,20 9.17,20.9 9.17,22H15.17C15.17,20.9 14.27,20 13.17,20V14.5H14.85C15.66,16.8 18.73,17.22 20.13,15.23C21.53,13.24 20.1,10.5 17.67,10.5M6.67,14.5C5.78,14.5 5.33,13.42 5.96,12.79C6.59,12.16 7.67,12.61 7.67,13.5C7.67,14.05 7.22,14.5 6.67,14.5M17.67,14.5C16.78,14.5 16.33,13.42 16.96,12.79C17.59,12.16 18.67,12.61 18.67,13.5C18.67,14.05 18.22,14.5 17.67,14.5Z"
  }));
};

RailroadLightIcon.displayName = 'RailroadLightIcon';
RailroadLightIcon.defaultProps = {
  size: 24
};
var _default = RailroadLightIcon;
exports["default"] = _default;