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

var SeatReclineNormalIcon = function SeatReclineNormalIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.59,5.41C6.81,4.63 6.81,3.36 7.59,2.58C8.37,1.8 9.64,1.8 10.42,2.58C11.2,3.36 11.2,4.63 10.42,5.41C9.63,6.2 8.37,6.2 7.59,5.41M6,16V7H4V16C4,18.76 6.24,21 9,21H15V19H9C7.34,19 6,17.66 6,16M20,20.07L14.93,15H11.5V11.32C12.9,12.47 15.1,13.5 17,13.5V11.32C15.34,11.34 13.39,10.45 12.33,9.28L10.93,7.73C10.74,7.5 10.5,7.35 10.24,7.23C9.95,7.09 9.62,7 9.28,7H9.25C8,7 7,8 7,9.25V15C7,16.66 8.34,18 10,18H15.07L18.57,21.5"
  }));
};

SeatReclineNormalIcon.displayName = 'SeatReclineNormalIcon';
SeatReclineNormalIcon.defaultProps = {
  size: 24
};
var _default = SeatReclineNormalIcon;
exports["default"] = _default;