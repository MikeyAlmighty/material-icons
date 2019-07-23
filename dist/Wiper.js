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

var WiperIcon = function WiperIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,4C5,4 2,9 2,9L9,16C9,16 9.5,15.1 10.4,14.5L10.7,16.5C10.3,16.8 10,17.4 10,18C10,19.1 10.9,20 12,20C13.1,20 14,19.1 14,18C14,17.1 13.5,16.4 12.7,16.1L12.3,14C14.1,14.2 15,16 15,16L22,9C22,9 19,4 12,4M15.1,13.1C14.3,12.5 13.3,12 12,12L11,6.1C11.3,6 11.7,6 12,6C15.7,6 18.1,7.7 19.3,8.9L15.1,13.1M8.9,13.1L4.7,8.9C5.5,8 7,7 9,6.4L10,12.4C9.6,12.6 9.2,12.8 8.9,13.1Z"
  }));
};

WiperIcon.displayName = 'WiperIcon';
WiperIcon.defaultProps = {
  size: 24
};
var _default = WiperIcon;
exports["default"] = _default;