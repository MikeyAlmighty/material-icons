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

var MonitorCellphoneStarIcon = function MonitorCellphoneStarIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M23,11H18C17.45,11 17,11.45 17,12V21C17,21.55 17.45,22 18,22H23C23.55,22 24,21.55 24,21V12C24,11.45 23.55,11 23,11M23,20H18V13H23V20M20,2H2C0.89,2 0,2.89 0,4V16C0,17.1 0.9,18 2,18H9V20H7V22H15V20H13V18H15V16H2V4H20V9H22V4C22,2.89 21.1,2 20,2M11.97,9L11,6L10.03,9H7L9.47,10.76L8.53,13.67L11,11.87L13.47,13.67L12.53,10.76L15,9H11.97Z"
  }));
};

MonitorCellphoneStarIcon.displayName = 'MonitorCellphoneStarIcon';
MonitorCellphoneStarIcon.defaultProps = {
  size: 24
};
var _default = MonitorCellphoneStarIcon;
exports["default"] = _default;