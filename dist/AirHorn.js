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

var AirHornIcon = function AirHornIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,2.8V6L19,9.2C19,9.5 18.7,9.8 18.4,9.7C18.4,9.7 14.5,7.1 10,7.1V9.5H10.2C10.7,9.5 11.2,9.7 11.4,10.1L12.7,11.9C12.9,12.1 13,12.4 13,12.6V20.6C13,21.3 12.3,22 11.5,22H6.5C5.7,22 5,21.4 5,20.6V12.6C5,12.3 5.1,12.1 5.3,11.9L6.6,10.1C6.9,9.7 7.3,9.5 7.8,9.5H8V8C7.6,8.5 7,8.8 6.4,8.8C5.1,8.8 4,7.5 4,6C4,4.5 5.1,3.2 6.4,3.2C7,3.3 7.6,3.6 8,4V2.6H10V5C14.5,5 18.4,2.4 18.4,2.4C18.7,2.3 19,2.5 19,2.8Z"
  }));
};

AirHornIcon.displayName = 'AirHornIcon';
AirHornIcon.defaultProps = {
  size: 24
};
var _default = AirHornIcon;
exports["default"] = _default;