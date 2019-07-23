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

var HinduismIcon = function HinduismIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,2L13.5,3.5L15,5L16.5,3.5L15,2M11,3C10,9 17,10 20,6L18,4.5C17,6 13,8 11,3M9,7C7,7 4.5,8.5 4.5,8.5L6,11C7,10 9,9.5 10,10C12,11 9,13 7,12V15.5C10,14 12,16 11,17.5C8,22 3,16 3,13C1,19 6,22 9,22C12,22 14,20 12.5,15H14C12.5,19.5 18,24 21,18C22,16 22,9.5 17,9.5C13,9.5 14,15 10.5,13.5C14,10 12,7 9,7M19,12C22,15 15,21 15,15C15,13 17,10.5 19,12Z"
  }));
};

HinduismIcon.displayName = 'HinduismIcon';
HinduismIcon.defaultProps = {
  size: 24
};
var _default = HinduismIcon;
exports["default"] = _default;