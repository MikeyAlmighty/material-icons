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

var GoogleKeepIcon = function GoogleKeepIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4,2H20C21.1,2 22,2.9 22,4V17.33L17.33,22H4C2.9,22 2,21.1 2,20V4C2,2.9 2.9,2 4,2M17,17V20.25L20.25,17H17M10,19H14V18H15V13C16.21,12.09 17,10.64 17,9C17,6.24 14.76,4 12,4C9.24,4 7,6.24 7,9C7,10.64 7.79,12.09 9,13V18H10V19M14,17H10V16H14V17M14,15H10V14H14V15M12,5C14.21,5 16,6.79 16,9C16,10.5 15.2,11.77 14,12.46V13H10V12.46C8.8,11.77 8,10.5 8,9C8,6.79 9.79,5 12,5Z"
  }));
};

GoogleKeepIcon.displayName = 'GoogleKeepIcon';
GoogleKeepIcon.defaultProps = {
  size: 24
};
var _default = GoogleKeepIcon;
exports["default"] = _default;