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

var TransitionIcon = function TransitionIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,2C18.87,2 22,5.13 22,9C22,11.71 20.46,14.05 18.22,15.22C17.55,16.5 16.5,17.55 15.22,18.22C14.05,20.46 11.71,22 9,22C5.13,22 2,18.87 2,15C2,12.29 3.54,9.95 5.78,8.78C6.45,7.5 7.5,6.45 8.78,5.78C9.95,3.54 12.29,2 15,2M12,19C8.13,19 5,15.87 5,12C4.37,12.84 4,13.87 4,15C4,17.76 6.24,20 9,20C10.13,20 11.16,19.63 12,19M15,16C11.13,16 8,12.87 8,9H8C7.37,9.84 7,10.87 7,12C7,14.76 9.24,17 12,17C13.13,17 14.16,16.63 15,16V16M15,4C13.87,4 12.84,4.37 12,5V5C15.87,5 19,8.13 19,12H19C19.63,11.16 20,10.13 20,9C20,6.24 17.76,4 15,4M10,9C10,11.76 12.24,14 15,14C15.6,14 16.17,13.9 16.7,13.7C16.9,13.17 17,12.6 17,12C17,9.24 14.76,7 12,7C11.4,7 10.83,7.1 10.3,7.3C10.1,7.83 10,8.4 10,9Z"
  }));
};

TransitionIcon.displayName = 'TransitionIcon';
TransitionIcon.defaultProps = {
  size: 24
};
var _default = TransitionIcon;
exports["default"] = _default;