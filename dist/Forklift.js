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

var ForkliftIcon = function ForkliftIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,4V11H4C2.89,11 2,11.89 2,13V17C2,18.66 3.34,20 5,20C6.66,20 8,18.66 8,17H10C10,18.66 11.34,20 13,20C14.66,20 16,18.66 16,17V13L12,4H6M17,5V19H22V17.5H18.5V5H17M7.5,5.5H11.2L14.5,13H7.5V5.5M5,15.5C5.83,15.5 6.5,16.17 6.5,17C6.5,17.83 5.83,18.5 5,18.5C4.17,18.5 3.5,17.83 3.5,17C3.5,16.17 4.17,15.5 5,15.5M13,15.5C13.83,15.5 14.5,16.17 14.5,17C14.5,17.83 13.83,18.5 13,18.5C12.17,18.5 11.5,17.83 11.5,17C11.5,16.17 12.17,15.5 13,15.5Z"
  }));
};

ForkliftIcon.displayName = 'ForkliftIcon';
ForkliftIcon.defaultProps = {
  size: 24
};
var _default = ForkliftIcon;
exports["default"] = _default;