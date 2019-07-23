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

var ArrowDecisionAutoIcon = function ArrowDecisionAutoIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,5H9L13,1L17,5H14V9.43C13.25,9.89 12.58,10.46 12,11.12V5M10.4,15H8.5L7.8,13H4.6L3.9,15H2L5.2,6H7.2L10.4,15M7.35,11.65L6.2,8L5.05,11.65H7.35M23,11L19,7V10C15.39,9.85 12.31,12.57 12,16.17C10.44,16.72 9.62,18.44 10.17,20C10.72,21.56 12.44,22.38 14,21.83C15.56,21.27 16.38,19.56 15.83,18C15.53,17.14 14.85,16.47 14,16.17C14.47,12.17 18.47,11.97 18.95,11.97V14.97L23,11Z"
  }));
};

ArrowDecisionAutoIcon.displayName = 'ArrowDecisionAutoIcon';
ArrowDecisionAutoIcon.defaultProps = {
  size: 24
};
var _default = ArrowDecisionAutoIcon;
exports["default"] = _default;