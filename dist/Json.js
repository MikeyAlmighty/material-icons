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

var JsonIcon = function JsonIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,3H7V5H5V10C5,11.1 4.1,12 3,12C4.1,12 5,12.9 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15C3,13.9 2.1,13 1,13H0V11H1C2.1,11 3,10.1 3,9V5C3,3.9 3.9,3 5,3M19,3C20.1,3 21,3.9 21,5V9C21,10.1 21.9,11 23,11H24V13H23C21.9,13 21,13.9 21,15V19C21,20.1 20.1,21 19,21H17V19H19V14C19,12.9 19.9,12 21,12C19.9,12 19,11.1 19,10V5H17V3H19M12,15C12.55,15 13,15.45 13,16C13,16.55 12.55,17 12,17C11.45,17 11,16.55 11,16C11,15.45 11.45,15 12,15M8,15C8.55,15 9,15.45 9,16C9,16.55 8.55,17 8,17C7.45,17 7,16.55 7,16C7,15.45 7.45,15 8,15M16,15C16.55,15 17,15.45 17,16C17,16.55 16.55,17 16,17C15.45,17 15,16.55 15,16C15,15.45 15.45,15 16,15Z"
  }));
};

JsonIcon.displayName = 'JsonIcon';
JsonIcon.defaultProps = {
  size: 24
};
var _default = JsonIcon;
exports["default"] = _default;