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

var ThermometerChevronDownIcon = function ThermometerChevronDownIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.41,12.17L14.24,9L12.83,10.41L17.41,15L22,10.41L20.58,9M12,17C12,19.76 9.76,22 7,22C4.24,22 2,19.76 2,17C2,15.43 2.74,13.94 4,13V5C4,3.34 5.34,2 7,2C8.66,2 10,3.34 10,5V13C11.26,13.94 12,15.43 12,17M6,8V14.17C4.44,14.72 3.62,16.44 4.17,18C4.72,19.56 6.44,20.38 8,19.83C9.56,19.27 10.38,17.56 9.83,16C9.53,15.14 8.85,14.47 8,14.17V8H6Z"
  }));
};

ThermometerChevronDownIcon.displayName = 'ThermometerChevronDownIcon';
ThermometerChevronDownIcon.defaultProps = {
  size: 24
};
var _default = ThermometerChevronDownIcon;
exports["default"] = _default;