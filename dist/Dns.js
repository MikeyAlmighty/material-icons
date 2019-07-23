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

var DnsIcon = function DnsIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7,9C5.9,9 5,8.1 5,7C5,5.9 5.9,5 7,5C8.1,5 9,5.9 9,7C9,8.1 8.1,9 7,9M20,3H4C3.45,3 3,3.45 3,4V10C3,10.55 3.45,11 4,11H20C20.55,11 21,10.55 21,10V4C21,3.45 20.55,3 20,3M7,19C5.9,19 5,18.1 5,17C5,15.9 5.9,15 7,15C8.1,15 9,15.9 9,17C9,18.1 8.1,19 7,19M20,13H4C3.45,13 3,13.45 3,14V20C3,20.55 3.45,21 4,21H20C20.55,21 21,20.55 21,20V14C21,13.45 20.55,13 20,13Z"
  }));
};

DnsIcon.displayName = 'DnsIcon';
DnsIcon.defaultProps = {
  size: 24
};
var _default = DnsIcon;
exports["default"] = _default;