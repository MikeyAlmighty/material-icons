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

var MixedMartialArtsIcon = function MixedMartialArtsIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,10V7H7V10H15M18,7C18.28,7 18.5,7.09 18.7,7.29C18.89,7.5 19,7.73 19,8V10.78C19,10.97 18.97,11.11 18.94,11.2L18.14,15.19C18,15.72 17.7,16 17.2,16H6.8C6.27,16 5.95,15.72 5.86,15.19L5.06,11.2C5.03,11.11 5,10.97 5,10.78V5C5,4.5 5.21,4 5.6,3.61C6,3.2 6.45,3 7,3H15C15.53,3 16,3.2 16.41,3.61C16.81,4 17,4.5 17,5V8C17,7.73 17.11,7.5 17.3,7.29C17.5,7.09 17.72,7 18,7M7,20V17H17V20C17,20.3 16.91,20.53 16.71,20.72C16.5,20.91 16.27,21 16,21H8C7.73,21 7.5,20.91 7.29,20.72C7.09,20.53 7,20.3 7,20Z"
  }));
};

MixedMartialArtsIcon.displayName = 'MixedMartialArtsIcon';
MixedMartialArtsIcon.defaultProps = {
  size: 24
};
var _default = MixedMartialArtsIcon;
exports["default"] = _default;