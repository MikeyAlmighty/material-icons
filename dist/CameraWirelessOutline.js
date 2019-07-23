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

var CameraWirelessOutlineIcon = function CameraWirelessOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,9V20H4V8H8.05L9.88,6H15V4H9L7.17,6H4C2.9,6 2,6.9 2,8V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V9H20M20.67,8H22C22,4.68 19.31,2 16,2V3.33C18.58,3.33 20.66,5.41 20.67,8M18,8H19.33C19.32,6.15 17.84,4.67 16,4.67V6C17.11,6 18,6.89 18,8M7,14C7,16.76 9.24,19 12,19C14.76,19 17,16.76 17,14C17,11.24 14.76,9 12,9C9.24,9 7,11.24 7,14M15,14C15,15.66 13.66,17 12,17C10.34,17 9,15.66 9,14C9,12.34 10.34,11 12,11C13.66,11 15,12.34 15,14Z"
  }));
};

CameraWirelessOutlineIcon.displayName = 'CameraWirelessOutlineIcon';
CameraWirelessOutlineIcon.defaultProps = {
  size: 24
};
var _default = CameraWirelessOutlineIcon;
exports["default"] = _default;