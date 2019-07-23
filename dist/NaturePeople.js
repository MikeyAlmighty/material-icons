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

var NaturePeopleIcon = function NaturePeopleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4.5,11C5.33,11 6,10.33 6,9.5C6,8.67 5.33,8 4.5,8C3.67,8 3,8.67 3,9.5C3,10.33 3.67,11 4.5,11M22.17,9.17C22.17,5.3 19.04,2.17 15.17,2.17C11.3,2.17 8.17,5.3 8.17,9.17C8.17,12.64 10.69,15.5 14,16.06V20H6V17H7V13C7,12.45 6.55,12 6,12H3C2.45,12 2,12.45 2,13V17H3V22H19V20H16V16.12C19.47,15.71 22.17,12.76 22.17,9.17Z"
  }));
};

NaturePeopleIcon.displayName = 'NaturePeopleIcon';
NaturePeopleIcon.defaultProps = {
  size: 24
};
var _default = NaturePeopleIcon;
exports["default"] = _default;