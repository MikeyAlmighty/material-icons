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

var AxisYRotateCounterclockwiseIcon = function AxisYRotateCounterclockwiseIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,14H14.91C14.57,17.45 13.4,20 12,20C10.42,20 9.12,16.73 9,12.58L7,11.43V12C7,17.5 9.24,22 12,22C14.42,22 16.44,18.56 16.9,14H20L16,10L12,14M12,2C10.12,2 8.47,4.08 7.62,7.16L9.37,8.17C9.87,5.69 10.86,4 12,4C13.27,4 14.36,6.11 14.79,9.08L16,7.88L16.7,8.58C16,4.74 14.16,2 12,2M2.11,5.13L1.11,6.87L1.06,6.94L11.12,12.75L12.72,11.16L2.15,5.06L2.11,5.13M21.89,18.87L22.89,17.13L19.2,15H17.77L17.5,16.34L21.89,18.87Z"
  }));
};

AxisYRotateCounterclockwiseIcon.displayName = 'AxisYRotateCounterclockwiseIcon';
AxisYRotateCounterclockwiseIcon.defaultProps = {
  size: 24
};
var _default = AxisYRotateCounterclockwiseIcon;
exports["default"] = _default;