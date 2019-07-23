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

var PanoramaVerticalIcon = function PanoramaVerticalIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6.54,20C7.31,17.4 7.7,14.72 7.7,12C7.7,9.28 7.31,6.6 6.54,4H17.45C16.68,6.6 16.29,9.28 16.29,12C16.29,14.72 16.68,17.4 17.45,20M19.94,21.12C18.84,18.18 18.3,15.09 18.3,12C18.3,8.91 18.85,5.82 19.94,2.88C20,2.77 20,2.66 20,2.57C20,2.23 19.77,2 19.37,2H4.63C4.23,2 4,2.23 4,2.57C4,2.67 4,2.77 4.06,2.88C5.16,5.82 5.71,8.91 5.71,12C5.71,15.09 5.16,18.18 4.07,21.12C4,21.23 4,21.34 4,21.43C4,21.76 4.23,22 4.63,22H19.38C19.77,22 20,21.76 20,21.43C20,21.33 20,21.23 19.94,21.12Z"
  }));
};

PanoramaVerticalIcon.displayName = 'PanoramaVerticalIcon';
PanoramaVerticalIcon.defaultProps = {
  size: 24
};
var _default = PanoramaVerticalIcon;
exports["default"] = _default;