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

var AtlassianIcon = function AtlassianIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.93,11.24C7.74,11 7.38,10.94 7.13,11.13C7.06,11.19 7,11.26 6.96,11.34L2.06,21.15C1.91,21.44 2.03,21.79 2.32,21.94C2.4,22 2.5,22 2.59,22H9.41C9.63,22 9.84,21.88 9.94,21.68C11.41,18.63 10.5,14 7.93,11.24M11.53,2.31C9.05,6.14 8.76,11 10.77,15.09L14.06,21.68C14.17,21.88 14.37,22 14.59,22H21.41C21.74,22 22,21.74 22,21.41C22,21.32 22,21.23 21.94,21.15C21.94,21.15 12.76,2.77 12.5,2.31C12.39,2.04 12.06,1.92 11.78,2.06C11.67,2.11 11.58,2.2 11.53,2.31Z"
  }));
};

AtlassianIcon.displayName = 'AtlassianIcon';
AtlassianIcon.defaultProps = {
  size: 24
};
var _default = AtlassianIcon;
exports["default"] = _default;