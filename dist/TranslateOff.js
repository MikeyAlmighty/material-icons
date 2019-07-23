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

var TranslateOffIcon = function TranslateOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12.17,5.81C11.87,6.69 11.47,7.55 11,8.39L12.35,9.74C13.11,8.5 13.71,7.18 14.13,5.81H17.16V3.75H9.94V1.69H7.87V3.75H6.37L8.43,5.81H12.17M15.53,12.91L17.03,14.41L17.67,12.69L19.08,16.47L22.39,19.77L18.7,9.94H16.64L15.53,12.91M1.31,1.31L0,2.62L1.13,3.75H0.65V5.81H3.19L5.26,7.88H4.46C5.21,9.56 6.24,11.15 7.53,12.58L2.28,17.76L3.75,19.22L8.91,14.07L12.11,17.27L12.8,15.43L14.1,16.72L12,22.31H14.06L15.22,19.22H16.6L21.38,24L22.69,22.69L1.31,1.31Z"
  }));
};

TranslateOffIcon.displayName = 'TranslateOffIcon';
TranslateOffIcon.defaultProps = {
  size: 24
};
var _default = TranslateOffIcon;
exports["default"] = _default;