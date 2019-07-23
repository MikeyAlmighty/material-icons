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

var SpaOutlineIcon = function SpaOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15.5,9.63C14.21,10.32 13.03,11.2 12,12.26C10.97,11.19 9.79,10.31 8.5,9.63C8.74,6.86 9.92,4.14 12.06,2C14.18,4.12 15.31,6.84 15.5,9.63M12,15.45C14.15,12.17 17.82,10 22,10C22,20 12.68,21.88 12,22C11.32,21.89 2,20 2,10C6.18,10 9.85,12.17 12,15.45M12.05,5.19C11.39,6.23 10.93,7.38 10.68,8.58L12,9.55L13.35,8.57C13.12,7.37 12.68,6.22 12.05,5.19M12,19.97C12,19.97 18,19 19.74,12.25C14,14 12,19.1 12,19.1C12,19.1 9,13 4.26,12.26C6,19 12,19.97 12,19.97Z"
  }));
};

SpaOutlineIcon.displayName = 'SpaOutlineIcon';
SpaOutlineIcon.defaultProps = {
  size: 24
};
var _default = SpaOutlineIcon;
exports["default"] = _default;