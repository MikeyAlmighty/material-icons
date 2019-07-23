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

var ImageFilterTiltShiftIcon = function ImageFilterTiltShiftIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5.68,19.74C7.16,20.95 9,21.75 11,21.95V19.93C9.54,19.75 8.21,19.17 7.1,18.31M13,19.93V21.95C15,21.75 16.84,20.95 18.32,19.74L16.89,18.31C15.79,19.17 14.46,19.75 13,19.93M18.31,16.9L19.74,18.33C20.95,16.85 21.75,15 21.95,13H19.93C19.75,14.46 19.17,15.79 18.31,16.9M15,12C15,10.34 13.66,9 12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12M4.07,13H2.05C2.25,15 3.05,16.84 4.26,18.32L5.69,16.89C4.83,15.79 4.25,14.46 4.07,13M5.69,7.1L4.26,5.68C3.05,7.16 2.25,9 2.05,11H4.07C4.25,9.54 4.83,8.21 5.69,7.1M19.93,11H21.95C21.75,9 20.95,7.16 19.74,5.68L18.31,7.1C19.17,8.21 19.75,9.54 19.93,11M18.32,4.26C16.84,3.05 15,2.25 13,2.05V4.07C14.46,4.25 15.79,4.83 16.9,5.69M11,4.07V2.05C9,2.25 7.16,3.05 5.68,4.26L7.1,5.69C8.21,4.83 9.54,4.25 11,4.07Z"
  }));
};

ImageFilterTiltShiftIcon.displayName = 'ImageFilterTiltShiftIcon';
ImageFilterTiltShiftIcon.defaultProps = {
  size: 24
};
var _default = ImageFilterTiltShiftIcon;
exports["default"] = _default;