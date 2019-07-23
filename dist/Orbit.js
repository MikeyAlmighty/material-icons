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

var OrbitIcon = function OrbitIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8.11,1.75C9.3,1.25 10.62,1 12,1C18.08,1 23,5.92 23,12C23,18.08 18.08,23 12,23C5.92,23 1,18.08 1,12C1,10.62 1.25,9.3 1.72,8.08C2.24,8.61 2.83,8.96 3.45,9.18C3.16,10.07 3,11 3,12C3,16.97 7.03,21 12,21C16.97,21 21,16.97 21,12C21,7.03 16.97,3 12,3C11,3 10.07,3.16 9.18,3.45C8.96,2.83 8.61,2.24 8.11,1.75M4.93,2.93C6.03,2.93 6.93,3.82 6.93,4.93C6.93,6.03 6.03,6.93 4.93,6.93C3.82,6.93 2.93,6.03 2.93,4.93C2.93,3.82 3.82,2.93 4.93,2.93M12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7Z"
  }));
};

OrbitIcon.displayName = 'OrbitIcon';
OrbitIcon.defaultProps = {
  size: 24
};
var _default = OrbitIcon;
exports["default"] = _default;