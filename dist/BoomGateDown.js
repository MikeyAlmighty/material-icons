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

var BoomGateDownIcon = function BoomGateDownIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19.86,3C19.31,2.04 18.09,1.71 17.12,2.27L6.92,8.16C6.62,8.06 6.31,8 6,8C4.34,8 3,9.34 3,11V20C2.45,20 2,20.45 2,21V22H10V21C10,20.45 9.55,20 9,20V11.58L19.12,5.73C20.08,5.18 20.41,3.96 19.86,3M6,12.5C5.17,12.5 4.5,11.83 4.5,11C4.5,10.17 5.17,9.5 6,9.5C6.83,9.5 7.5,10.17 7.5,11C7.5,11.83 6.83,12.5 6,12.5M10.4,9.62L8.1,8.62L9.4,7.87L11.7,8.87L10.4,9.62M13.86,7.62L11.56,6.62L12.86,5.87L15.16,6.87L13.86,7.62M17.33,5.62L15.03,4.62L16.33,3.87L18.62,4.87L17.33,5.62M17,20L12,15H15V11H19V15H22L17,20"
  }));
};

BoomGateDownIcon.displayName = 'BoomGateDownIcon';
BoomGateDownIcon.defaultProps = {
  size: 24
};
var _default = BoomGateDownIcon;
exports["default"] = _default;