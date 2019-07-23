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

var TrafficLightIcon = function TrafficLightIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,9C10.9,9 10,8.1 10,7C10,5.89 10.9,5 12,5C13.11,5 14,5.89 14,7C14,8.1 13.1,9 12,9M12,14C10.9,14 10,13.1 10,12C10,10.89 10.9,10 12,10C13.11,10 14,10.89 14,12C14,13.1 13.1,14 12,14M12,19C10.9,19 10,18.1 10,17C10,15.89 10.9,15 12,15C13.11,15 14,15.89 14,17C14,18.1 13.1,19 12,19M20,10H17V8.86C18.72,8.41 20,6.86 20,5H17V4C17,3.45 16.55,3 16,3H8C7.45,3 7,3.45 7,4V5H4C4,6.86 5.28,8.41 7,8.86V10H4C4,11.86 5.28,13.41 7,13.86V15H4C4,16.86 5.28,18.41 7,18.86V20C7,20.55 7.45,21 8,21H16C16.55,21 17,20.55 17,20V18.86C18.72,18.41 20,16.86 20,15H17V13.86C18.72,13.41 20,11.86 20,10Z"
  }));
};

TrafficLightIcon.displayName = 'TrafficLightIcon';
TrafficLightIcon.defaultProps = {
  size: 24
};
var _default = TrafficLightIcon;
exports["default"] = _default;