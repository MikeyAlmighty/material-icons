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

var RubyIcon = function RubyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.8,2.07C21.32,2.5 22.04,4.23 22,6.04V6L20.86,20.93L6.08,21.94H6.09C4.86,21.89 2.13,21.77 2,17.95L3.37,15.45L6.14,21.91L8.5,14.29L8.45,14.3L8.47,14.28L16.18,16.74L14.19,8.96L21.54,8.5L15.75,3.76L18.8,2.06V2.07M2,17.91V17.93L2,17.91V17.91M6.28,6.23C9.24,3.28 13.07,1.54 14.54,3.03C16,4.5 14.46,8.12 11.5,11.06C8.5,14 4.73,15.84 3.26,14.36C1.79,12.87 3.3,9.17 6.27,6.23H6.28Z"
  }));
};

RubyIcon.displayName = 'RubyIcon';
RubyIcon.defaultProps = {
  size: 24
};
var _default = RubyIcon;
exports["default"] = _default;