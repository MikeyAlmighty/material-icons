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

var ZodiacGeminiIcon = function ZodiacGeminiIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18,5.3C19.35,4.97 20.66,4.54 21.94,4L21.18,2.14C18.27,3.36 15.15,4 12,4C8.85,4 5.73,3.38 2.82,2.17L2.06,4C3.34,4.54 4.65,4.97 6,5.3V18.7C4.65,19.03 3.34,19.46 2.06,20L2.82,21.86C8.7,19.42 15.3,19.42 21.18,21.86L21.94,20C20.66,19.46 19.35,19.03 18,18.7V5.3M8,18.3V5.69C9.32,5.89 10.66,6 12,6C13.34,6 14.68,5.89 16,5.69V18.31C13.35,17.9 10.65,17.9 8,18.31V18.3Z"
  }));
};

ZodiacGeminiIcon.displayName = 'ZodiacGeminiIcon';
ZodiacGeminiIcon.defaultProps = {
  size: 24
};
var _default = ZodiacGeminiIcon;
exports["default"] = _default;