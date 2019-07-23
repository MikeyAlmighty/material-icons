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

var CaseSensitiveAltIcon = function CaseSensitiveAltIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,14C20,12.5 19.5,12 18,12H16V11C16,10 16,10 14,10V15.4L14,19H16L18,19C19.5,19 20,18.47 20,17V14M12,12C12,10.5 11.47,10 10,10H6C4.5,10 4,10.5 4,12V19H6V16H10V19H12V12M10,7H14V5H10V7M22,9V20C22,21.11 21.11,22 20,22H4C2.9,22 2,21.1 2,20V9C2,7.89 2.89,7 4,7H8V5L10,3H14L16,5V7H20C21.1,7 22,7.9 22,9H22M16,17H18V14H16V17M6,12H10V14H6V12Z"
  }));
};

CaseSensitiveAltIcon.displayName = 'CaseSensitiveAltIcon';
CaseSensitiveAltIcon.defaultProps = {
  size: 24
};
var _default = CaseSensitiveAltIcon;
exports["default"] = _default;