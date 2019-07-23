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

var DnsOutlineIcon = function DnsOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19,15V19H5V15H19M20,13H4C3.45,13 3,13.45 3,14V20C3,20.55 3.45,21 4,21H20C20.55,21 21,20.55 21,20V14C21,13.45 20.55,13 20,13M7,18.5C6.17,18.5 5.5,17.83 5.5,17C5.5,16.17 6.17,15.5 7,15.5C7.83,15.5 8.5,16.17 8.5,17C8.5,17.83 7.83,18.5 7,18.5M19,5V9H5V5H19M20,3H4C3.45,3 3,3.45 3,4V10C3,10.55 3.45,11 4,11H20C20.55,11 21,10.55 21,10V4C21,3.45 20.55,3 20,3M7,8.5C6.17,8.5 5.5,7.83 5.5,7C5.5,6.17 6.17,5.5 7,5.5C7.83,5.5 8.5,6.17 8.5,7C8.5,7.83 7.83,8.5 7,8.5Z"
  }));
};

DnsOutlineIcon.displayName = 'DnsOutlineIcon';
DnsOutlineIcon.defaultProps = {
  size: 24
};
var _default = DnsOutlineIcon;
exports["default"] = _default;