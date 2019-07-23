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

var RobotIndustrialIcon = function RobotIndustrialIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.41,4L16,6.41V6.59L18.41,9H22V11H17.59L16,9.41V12H15C13.9,12 13,11.1 13,10V7.5H9.86C9.77,7.87 9.62,8.22 9.42,8.55L15.18,19H20C21.1,19 22,19.9 22,21V22H2V21C2,19.9 2.9,19 4,19H10.61L5.92,10.5C4.12,10.47 2.56,9.24 2.11,7.5C1.56,5.36 2.85,3.18 5,2.63C7.13,2.08 9.31,3.36 9.86,5.5H13V3C13,1.9 13.9,1 15,1H16V3.59L17.59,2H22V4H18.41M6,4.5C4.9,4.5 4,5.4 4,6.5C4,7.6 4.9,8.5 6,8.5C7.1,8.5 8,7.6 8,6.5C8,5.4 7.1,4.5 6,4.5Z"
  }));
};

RobotIndustrialIcon.displayName = 'RobotIndustrialIcon';
RobotIndustrialIcon.defaultProps = {
  size: 24
};
var _default = RobotIndustrialIcon;
exports["default"] = _default;