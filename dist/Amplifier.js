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

var AmplifierIcon = function AmplifierIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M10,2H14C14.55,2 15,2.45 15,3H21V21H19C19,21.55 18.55,22 18,22C17.45,22 17,21.55 17,21H7C7,21.55 6.55,22 6,22C5.45,22 5,21.55 5,21H3V3H9C9,2.45 9.45,2 10,2M5,5V9H19V5H5M7,6C7.55,6 8,6.45 8,7C8,7.55 7.55,8 7,8C6.45,8 6,7.55 6,7C6,6.45 6.45,6 7,6M12,6H14V7H12V6M15,6H16V8H15V6M17,6H18V8H17V6M12,11C9.79,11 8,12.79 8,15C8,17.21 9.79,19 12,19C14.21,19 16,17.21 16,15C16,12.79 14.21,11 12,11M10,6C10.55,6 11,6.45 11,7C11,7.55 10.55,8 10,8C9.45,8 9,7.55 9,7C9,6.45 9.45,6 10,6Z"
  }));
};

AmplifierIcon.displayName = 'AmplifierIcon';
AmplifierIcon.defaultProps = {
  size: 24
};
var _default = AmplifierIcon;
exports["default"] = _default;