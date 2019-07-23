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

var SackPercentIcon = function SackPercentIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8,7L6,2L10,4L12,2L14,4L18,2L16,7H8M16,22C10,22 8,22 8,22C2,22 3,18 3,18C3,18 4,11 8,9H16C20,11 21,18 21,18C21,18 22,22 16,22M7.5,12.5C7.5,13.33 8.17,14 9,14C9.83,14 10.5,13.33 10.5,12.5C10.5,11.67 9.83,11 9,11C8.17,11 7.5,11.67 7.5,12.5M16.5,18.5C16.5,17.67 15.83,17 15,17C14.17,17 13.5,17.67 13.5,18.5C13.5,19.33 14.17,20 15,20C15.83,20 16.5,19.33 16.5,18.5M16.5,12.35L15.15,11L7.5,18.65L8.87,20L16.5,12.35Z"
  }));
};

SackPercentIcon.displayName = 'SackPercentIcon';
SackPercentIcon.defaultProps = {
  size: 24
};
var _default = SackPercentIcon;
exports["default"] = _default;