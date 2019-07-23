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

var SafetyGogglesIcon = function SafetyGogglesIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18,9C19.11,9 20,9.89 20,11V14C20,15.11 19.11,16 18,16H15.77L14.53,14.77C13.78,14 12.77,13.6 11.7,13.6C10.63,13.6 9.63,14 8.87,14.77L7.64,16H6C4.89,16 4,15.11 4,14V11C4,9.89 4.89,9 6,9H18M18,7H6C3.79,7 2,8.79 2,11H2L1,11V14H2V14C2,16.21 3.79,18 6,18H8.5C8.54,17.94 8.59,17.88 10.29,16.18C10.68,15.79 11.19,15.6 11.7,15.6C12.22,15.6 12.73,15.79 13.12,16.18L14.91,18H18C20.21,18 22,16.21 22,14H22L23,14V11H22V11C22,8.79 20.21,7 18,7Z"
  }));
};

SafetyGogglesIcon.displayName = 'SafetyGogglesIcon';
SafetyGogglesIcon.defaultProps = {
  size: 24
};
var _default = SafetyGogglesIcon;
exports["default"] = _default;