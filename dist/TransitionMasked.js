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

var TransitionMaskedIcon = function TransitionMaskedIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,2C16.94,2 18.59,2.7 19.95,4.05C21.3,5.41 22,7.06 22,9C22,10.56 21.5,11.96 20.58,13.2C19.64,14.43 18.44,15.27 16.97,15.7L17,15.38V15C17,12.81 16.23,10.93 14.65,9.35C13.07,7.77 11.19,7 9,7H8.63L8.3,7.03C8.73,5.56 9.57,4.36 10.8,3.42C12.04,2.5 13.44,2 15,2M9,8C12.87,8 16,11.13 16,15C16,18.87 12.87,22 9,22C5.13,22 2,18.87 2,15C2,11.13 5.13,8 9,8M9,10C6.24,10 4,12.24 4,15C4,17.76 6.24,20 9,20C11.76,20 14,17.76 14,15C14,12.24 11.76,10 9,10Z"
  }));
};

TransitionMaskedIcon.displayName = 'TransitionMaskedIcon';
TransitionMaskedIcon.defaultProps = {
  size: 24
};
var _default = TransitionMaskedIcon;
exports["default"] = _default;