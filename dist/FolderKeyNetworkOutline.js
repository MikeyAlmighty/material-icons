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

var FolderKeyNetworkOutlineIcon = function FolderKeyNetworkOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,20C15,19.45 14.55,19 14,19H13V17H19C20.1,17 21,16.1 21,15V7C21,5.9 20.1,5 19,5H13L11,3H5C3.9,3 3,3.9 3,5V15C3,16.1 3.9,17 5,17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H22V20H15M5,15V5H10.17L11.59,6.41L12.17,7H13L19,7V15H5M11.83,10C11.42,8.83 10.31,8 9,8C7.34,8 6,9.34 6,11C6,12.66 7.34,14 9,14C10.31,14 11.42,13.17 11.83,12H14V14H16V12H17V10H11.83M9,12C8.45,12 8,11.55 8,11C8,10.45 8.45,10 9,10C9.55,10 10,10.45 10,11C10,11.55 9.55,12 9,12Z"
  }));
};

FolderKeyNetworkOutlineIcon.displayName = 'FolderKeyNetworkOutlineIcon';
FolderKeyNetworkOutlineIcon.defaultProps = {
  size: 24
};
var _default = FolderKeyNetworkOutlineIcon;
exports["default"] = _default;