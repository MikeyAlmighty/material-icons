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

var VoteOutlineIcon = function VoteOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18,13L21,16V20C21,21.11 20.1,22 19,22H5C3.89,22 3,21.1 3,20V16L6,13H6.83L8.83,15H6.78L5,17H19L17.23,15H15.32L17.32,13H18M19,20V19H5V20H19M11.34,15L6.39,10.07C6,9.68 6,9.05 6.39,8.66L12.76,2.29C13.15,1.9 13.78,1.9 14.16,2.3L19.11,7.25C19.5,7.64 19.5,8.27 19.11,8.66L12.75,15C12.36,15.41 11.73,15.41 11.34,15M13.46,4.41L8.5,9.36L12.05,12.9L17,7.95L13.46,4.41Z"
  }));
};

VoteOutlineIcon.displayName = 'VoteOutlineIcon';
VoteOutlineIcon.defaultProps = {
  size: 24
};
var _default = VoteOutlineIcon;
exports["default"] = _default;