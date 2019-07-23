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

var FolderKeyNetworkIcon = function FolderKeyNetworkIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,5C4.89,5 4,5.89 4,7V15C4,16.1 4.9,17 6,17H11V19H10C9.45,19 9,19.45 9,20H2V22H9C9,22.55 9.45,23 10,23H14C14.55,23 15,22.55 15,22H22V20H15C15,19.45 14.55,19 14,19H13V17H18C19.1,17 20,16.1 20,15V9C20,7.9 19.1,7 18,7H12L10,5H6M9,9C10.31,9 11.42,9.83 11.83,11H17V13H16V15H14V13H11.83C11.42,14.17 10.31,15 9,15C7.34,15 6,13.66 6,12C6,10.34 7.34,9 9,9M9,11C8.45,11 8,11.45 8,12C8,12.56 8.45,13 9,13C9.55,13 10,12.55 10,12C10,11.45 9.55,11 9,11Z"
  }));
};

FolderKeyNetworkIcon.displayName = 'FolderKeyNetworkIcon';
FolderKeyNetworkIcon.defaultProps = {
  size: 24
};
var _default = FolderKeyNetworkIcon;
exports["default"] = _default;