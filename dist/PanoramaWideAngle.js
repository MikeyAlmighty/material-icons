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

var PanoramaWideAngleIcon = function PanoramaWideAngleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,4C9.27,4 6.78,4.24 4.05,4.72L3.12,4.88L2.87,5.78C2.29,7.85 2,9.93 2,12C2,14.07 2.29,16.15 2.87,18.22L3.12,19.11L4.05,19.27C6.78,19.76 9.27,20 12,20C14.73,20 17.22,19.76 19.95,19.28L20.88,19.12L21.13,18.23C21.71,16.15 22,14.07 22,12C22,9.93 21.71,7.85 21.13,5.78L20.88,4.89L19.95,4.73C17.22,4.24 14.73,4 12,4M12,6C14.45,6 16.71,6.2 19.29,6.64C19.76,8.42 20,10.22 20,12C20,13.78 19.76,15.58 19.29,17.36C16.71,17.8 14.45,18 12,18C9.55,18 7.29,17.8 4.71,17.36C4.24,15.58 4,13.78 4,12C4,10.22 4.24,8.42 4.71,6.64C7.29,6.2 9.55,6 12,6Z"
  }));
};

PanoramaWideAngleIcon.displayName = 'PanoramaWideAngleIcon';
PanoramaWideAngleIcon.defaultProps = {
  size: 24
};
var _default = PanoramaWideAngleIcon;
exports["default"] = _default;