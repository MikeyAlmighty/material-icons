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

var AlarmNoteIcon = function AlarmNoteIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.4,1.86L16.11,3.39L20.71,7.25L22,5.72L17.4,1.86M6.6,1.86L2,5.71L3.29,7.24L7.88,3.39L6.6,1.86M12,4C7.03,4 3,8.03 3,13C3,17.97 7.03,22 12,22C12.33,22 12.67,22 13,21.94V19.94C12.67,20 12.33,20 12,20C8.13,20 5,16.87 5,13C5,9.13 8.13,6 12,6C15.1,6 17.83,8.03 18.71,11H20.78C19.85,6.9 16.2,4 12,4M23,15H20V20.5C20,21.88 18.88,23 17.5,23C16.12,23 15,21.88 15,20.5C15,19.12 16.12,18 17.5,18C18.04,18 18.57,18.18 19,18.5V13H23V15M11.5,8V13.25L7.5,15.62L8.25,16.85L13,14V8H11.5Z"
  }));
};

AlarmNoteIcon.displayName = 'AlarmNoteIcon';
AlarmNoteIcon.defaultProps = {
  size: 24
};
var _default = AlarmNoteIcon;
exports["default"] = _default;