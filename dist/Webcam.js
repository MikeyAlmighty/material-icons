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

var WebcamIcon = function WebcamIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C15.87,2 19,5.13 19,9C19,12.87 15.87,16 12,16C8.13,16 5,12.87 5,9C5,5.13 8.13,2 12,2M12,4C9.24,4 7,6.24 7,9C7,11.76 9.24,14 12,14C14.76,14 17,11.76 17,9C17,6.24 14.76,4 12,4M12,6C13.66,6 15,7.34 15,9C15,10.66 13.66,12 12,12C10.34,12 9,10.66 9,9C9,7.34 10.34,6 12,6M6,22C4.9,22 4,21.1 4,20C4,19.62 4.1,19.27 4.29,18.97L6.11,15.81C7.69,17.17 9.75,18 12,18C14.25,18 16.31,17.17 17.89,15.81L19.71,18.97C19.9,19.27 20,19.62 20,20C20,21.1 19.1,22 18,22H6Z"
  }));
};

WebcamIcon.displayName = 'WebcamIcon';
WebcamIcon.defaultProps = {
  size: 24
};
var _default = WebcamIcon;
exports["default"] = _default;