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

var PeriscopeIcon = function PeriscopeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,7C12,8.1 11.1,9 10,9C8.9,9 8,8.1 8,7C7.37,7.84 7,8.87 7,10C7,12.76 9.24,15 12,15C14.76,15 17,12.76 17,10C17,7.24 14.76,5 12,5C11.57,5 11.16,5.05 10.77,5.15C11.5,5.45 12,6.17 12,7M12,2C16.42,2 20,5.58 20,10C20,11.05 19.8,12.04 19.43,12.96C17.89,17.38 13.63,22 12,22C10.37,22 6.11,17.38 4.57,12.96C4.2,12.04 4,11.05 4,10C4,5.58 7.58,2 12,2Z"
  }));
};

PeriscopeIcon.displayName = 'PeriscopeIcon';
PeriscopeIcon.defaultProps = {
  size: 24
};
var _default = PeriscopeIcon;
exports["default"] = _default;