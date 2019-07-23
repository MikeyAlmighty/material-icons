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

var CreditCardWirelessIcon = function CreditCardWirelessIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18,11H6C4.9,11 4,11.9 4,13V21C4,22.1 4.9,23 6,23H18C19.1,23 20,22.1 20,21V13C20,11.9 19.1,11 18,11M18,21H6V17H18V21M18,15H6V13H18V15M4.93,4.92L6.34,6.33C9.46,3.2 14.53,3.2 17.66,6.33L19.07,4.92C15.17,1 8.84,1 4.93,4.92M7.76,7.75L9.17,9.16C10.73,7.6 13.26,7.6 14.83,9.16L16.24,7.75C13.9,5.41 10.1,5.41 7.76,7.75Z"
  }));
};

CreditCardWirelessIcon.displayName = 'CreditCardWirelessIcon';
CreditCardWirelessIcon.defaultProps = {
  size: 24
};
var _default = CreditCardWirelessIcon;
exports["default"] = _default;