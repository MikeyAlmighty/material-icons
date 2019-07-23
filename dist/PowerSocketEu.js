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

var PowerSocketEuIcon = function PowerSocketEuIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.5,10.5C8.33,10.5 9,11.17 9,12C9,12.83 8.33,13.5 7.5,13.5C6.66,13.5 6,12.83 6,12C6,11.17 6.67,10.5 7.5,10.5M16.5,10.5C17.33,10.5 18,11.17 18,12C18,12.83 17.33,13.5 16.5,13.5C15.67,13.5 15,12.83 15,12C15,11.17 15.67,10.5 16.5,10.5M4.22,2H19.78C21,2 22,3 22,4.22V19.78C22,21.01 21.01,22 19.78,22H4.22C3,22 2,21 2,19.78V4.22C2,2.99 2.99,2 4.22,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4Z"
  }));
};

PowerSocketEuIcon.displayName = 'PowerSocketEuIcon';
PowerSocketEuIcon.defaultProps = {
  size: 24
};
var _default = PowerSocketEuIcon;
exports["default"] = _default;