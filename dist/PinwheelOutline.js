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

var PinwheelOutlineIcon = function PinwheelOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,23H11V16.43C9.93,17.4 8.5,18 7,18C3.75,18 1,15.25 1,12V11H7.57C6.6,9.93 6,8.5 6,7C6,3.75 8.75,1 12,1H13V7.57C14.07,6.6 15.5,6 17,6C20.25,6 23,8.75 23,12V13H16.43C17.4,14.07 18,15.5 18,17C18,20.25 15.25,23 12,23M13,13.13V20.87C14.7,20.41 16,18.83 16,17C16,15.17 14.7,13.59 13,13.13M3.13,13C3.59,14.7 5.17,16 7,16C8.83,16 10.41,14.7 10.87,13H3.13M13.13,11H20.87C20.41,9.3 18.82,8 17,8C15.18,8 13.59,9.3 13.13,11M11,3.13C9.3,3.59 8,5.18 8,7C8,8.82 9.3,10.41 11,10.87V3.13Z"
  }));
};

PinwheelOutlineIcon.displayName = 'PinwheelOutlineIcon';
PinwheelOutlineIcon.defaultProps = {
  size: 24
};
var _default = PinwheelOutlineIcon;
exports["default"] = _default;