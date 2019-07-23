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

var ScreenRotationIcon = function ScreenRotationIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.5,21.5C4.25,19.94 1.91,16.76 1.55,13H0.05C0.56,19.16 5.71,24 12,24L12.66,23.97L8.85,20.16M14.83,21.19L2.81,9.17L9.17,2.81L21.19,14.83M10.23,1.75C9.64,1.16 8.69,1.16 8.11,1.75L1.75,8.11C1.16,8.7 1.16,9.65 1.75,10.23L13.77,22.25C14.36,22.84 15.31,22.84 15.89,22.25L22.25,15.89C22.84,15.3 22.84,14.35 22.25,13.77L10.23,1.75M16.5,2.5C19.75,4.07 22.09,7.24 22.45,11H23.95C23.44,4.84 18.29,0 12,0L11.34,0.03L15.15,3.84L16.5,2.5Z"
  }));
};

ScreenRotationIcon.displayName = 'ScreenRotationIcon';
ScreenRotationIcon.defaultProps = {
  size: 24
};
var _default = ScreenRotationIcon;
exports["default"] = _default;