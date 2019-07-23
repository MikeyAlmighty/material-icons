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

var MicroscopeIcon = function MicroscopeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9.46,6.28L11.05,9C8.47,9.26 6.5,11.41 6.5,14C6.5,16.76 8.74,19 11.5,19C13.55,19 15.31,17.77 16.08,16H13.5V14H21.5V16H19.25C18.84,17.57 17.97,18.96 16.79,20H19.5V22H3.5V20H6.21C4.55,18.53 3.5,16.39 3.5,14C3.5,10.37 5.96,7.2 9.46,6.28M12.74,2.07L13.5,3.37L14.36,2.87L17.86,8.93L14.39,10.93L10.89,4.87L11.76,4.37L11,3.07L12.74,2.07Z"
  }));
};

MicroscopeIcon.displayName = 'MicroscopeIcon';
MicroscopeIcon.defaultProps = {
  size: 24
};
var _default = MicroscopeIcon;
exports["default"] = _default;