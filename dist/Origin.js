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

var OriginIcon = function OriginIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2.13C12,2.23 11.95,2.33 11.89,2.41C11.5,3 11.16,3.64 11.04,4.33L11,4.56L12,4.5C16.14,4.5 19.5,7.86 19.5,12C19.5,13.62 19,15.11 18.12,16.34C16.73,18.68 14.72,20.65 12.34,21.97C12.25,22 12.12,22 12.06,21.93C12,21.83 12,21.7 12.09,21.61C12.47,21.09 12.73,20.5 12.87,19.85L12.93,19.44L12,19.5C7.86,19.5 4.5,16.14 4.5,12C4.5,10.39 5,8.89 5.88,7.67C7.26,5.32 9.28,3.34 11.67,2C11.78,1.95 11.94,2 12,2.13M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9Z"
  }));
};

OriginIcon.displayName = 'OriginIcon';
OriginIcon.defaultProps = {
  size: 24
};
var _default = OriginIcon;
exports["default"] = _default;