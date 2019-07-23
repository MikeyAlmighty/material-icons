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

var HandPeaceVariantIcon = function HandPeaceVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7,19H15V22H7V19M16.94,1C16.4,0.91 15.87,1.25 15.76,1.8L14.75,7.57C14.53,7.54 14.29,7.5 14,7.47L13.57,7.5L12.41,1.8C12.31,1.26 11.78,0.91 11.24,1C10.7,1.13 10.35,1.66 10.45,2.2L11.65,8.11L7.85,9.8C7.35,10 7,10.53 7,11.14V15.5C7,16.3 7.73,17 8.5,17H15C15.39,17 15.74,16.84 16,16.57L16.5,16.16C16.5,16.16 17,15.78 17,15.36V13C17,13 17,11.86 16.13,11.3L17.71,2.2C17.83,1.66 17.5,1.13 16.94,1Z"
  }));
};

HandPeaceVariantIcon.displayName = 'HandPeaceVariantIcon';
HandPeaceVariantIcon.defaultProps = {
  size: 24
};
var _default = HandPeaceVariantIcon;
exports["default"] = _default;