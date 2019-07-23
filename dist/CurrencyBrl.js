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

var CurrencyBrlIcon = function CurrencyBrlIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,15H14C14,16.08 15.37,17 17,17C18.63,17 20,16.08 20,15C20,13.9 18.96,13.5 16.76,12.97C14.64,12.44 12,11.78 12,9C12,7.21 13.47,5.69 15.5,5.18V3H18.5V5.18C20.53,5.69 22,7.21 22,9H20C20,7.92 18.63,7 17,7C15.37,7 14,7.92 14,9C14,10.1 15.04,10.5 17.24,11.03C19.36,11.56 22,12.22 22,15C22,16.79 20.53,18.31 18.5,18.82V21H15.5V18.82C13.47,18.31 12,16.79 12,15M2,3H5.5C8.54,3 11,5.46 11,8.5C11,10.69 9.71,12.59 7.86,13.47L11.64,21H9.4L5.88,14H5.5L4,14V21H2V3M5.5,12C7.43,12 9,10.43 9,8.5C9,6.57 7.43,5 5.5,5H4V12H5.5Z"
  }));
};

CurrencyBrlIcon.displayName = 'CurrencyBrlIcon';
CurrencyBrlIcon.defaultProps = {
  size: 24
};
var _default = CurrencyBrlIcon;
exports["default"] = _default;