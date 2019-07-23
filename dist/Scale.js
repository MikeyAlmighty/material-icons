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

var ScaleIcon = function ScaleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8.46,15.06L7.05,16.47L5.68,15.1C4.82,16.21 4.24,17.54 4.06,19H6V21H2V20C2,15.16 5.44,11.13 10,10.2V8.2L2,5V3H22V5L14,8.2V10.2C18.56,11.13 22,15.16 22,20V21H18V19H19.94C19.76,17.54 19.18,16.21 18.32,15.1L16.95,16.47L15.54,15.06L16.91,13.68C15.8,12.82 14.46,12.24 13,12.06V14H11V12.06C9.54,12.24 8.2,12.82 7.09,13.68L8.46,15.06M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C11.68,22 11.38,21.93 11.12,21.79L7.27,20L11.12,18.21C11.38,18.07 11.68,18 12,18Z"
  }));
};

ScaleIcon.displayName = 'ScaleIcon';
ScaleIcon.defaultProps = {
  size: 24
};
var _default = ScaleIcon;
exports["default"] = _default;