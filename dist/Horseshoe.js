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

var HorseshoeIcon = function HorseshoeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,4H20V1H16V4C16,4 18,8 18,12C18,16 16,19 12,19C8,19 6,16 6,12C6,8 8,4 8,4V1H4V4H5C5,4 2,8 2,14C2,19 7,23 12,23C17,23 22,19 22,14C22,8 19,4 19,4M4,13C3.4,13 3,12.6 3,12C3,11.4 3.4,11 4,11C4.6,11 5,11.4 5,12C5,12.6 4.6,13 4,13M6,19C5.4,19 5,18.6 5,18C5,17.4 5.4,17 6,17C6.6,17 7,17.4 7,18C7,18.6 6.6,19 6,19M12,22C11.4,22 11,21.6 11,21C11,20.4 11.4,20 12,20C12.6,20 13,20.4 13,21C13,21.6 12.6,22 12,22M18,19C17.4,19 17,18.6 17,18C17,17.4 17.4,17 18,17C18.6,17 19,17.4 19,18C19,18.6 18.6,19 18,19M20,13C19.4,13 19,12.6 19,12C19,11.4 19.4,11 20,11C20.6,11 21,11.4 21,12C21,12.6 20.6,13 20,13Z"
  }));
};

HorseshoeIcon.displayName = 'HorseshoeIcon';
HorseshoeIcon.defaultProps = {
  size: 24
};
var _default = HorseshoeIcon;
exports["default"] = _default;