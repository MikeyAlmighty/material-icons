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

var MarginIcon = function MarginIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,4V9L18.5,7.5L5.5,20.5L3.5,18.5L16.5,5.5L15,4H20M17,20C15.34,20 14,18.66 14,17V15C14,13.34 15.34,12 17,12C18.66,12 20,13.34 20,15V17C20,18.66 18.66,20 17,20M17,14C16.45,14 16,14.45 16,15V17C16,17.55 16.45,18 17,18C17.55,18 18,17.55 18,17V15C18,14.45 17.55,14 17,14M7,12C5.34,12 4,10.66 4,9V7C4,5.34 5.34,4 7,4C8.66,4 10,5.34 10,7V9C10,10.66 8.66,12 7,12M7,6C6.45,6 6,6.45 6,7V9C6,9.55 6.45,10 7,10C7.55,10 8,9.55 8,9V7C8,6.45 7.55,6 7,6Z"
  }));
};

MarginIcon.displayName = 'MarginIcon';
MarginIcon.defaultProps = {
  size: 24
};
var _default = MarginIcon;
exports["default"] = _default;