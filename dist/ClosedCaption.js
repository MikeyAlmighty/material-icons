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

var ClosedCaptionIcon = function ClosedCaptionIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14C18,14.55 17.55,15 17,15H14C13.45,15 13,14.55 13,14V10C13,9.45 13.45,9 14,9H17C17.55,9 18,9.45 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14C11,14.55 10.55,15 10,15H7C6.45,15 6,14.55 6,14V10C6,9.45 6.45,9 7,9H10C10.55,9 11,9.45 11,10M19,4H5C3.89,4 3,4.89 3,6V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V6C21,4.89 20.1,4 19,4Z"
  }));
};

ClosedCaptionIcon.displayName = 'ClosedCaptionIcon';
ClosedCaptionIcon.defaultProps = {
  size: 24
};
var _default = ClosedCaptionIcon;
exports["default"] = _default;