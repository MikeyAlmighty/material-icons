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

var InternetExplorerIcon = function InternetExplorerIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13,3L14,3.06C16.8,1.79 19.23,1.64 20.5,2.92C21.5,3.93 21.58,5.67 20.92,7.72C21.61,9 22,10.45 22,12L21.95,13H9.08C9.45,15.28 11.06,17 13,17C14.31,17 15.47,16.21 16.2,15H21.5C20.25,18.5 16.92,21 13,21C11.72,21 10.5,20.73 9.41,20.25C6.5,21.68 3.89,21.9 2.57,20.56C1,18.96 1.68,15.57 4,12C4.93,10.54 6.14,9.06 7.57,7.65L8.38,6.88C7.21,7.57 5.71,8.62 4.19,10.17C5.03,6.08 8.66,3 13,3M13,7C11.21,7 9.69,8.47 9.18,10.5H16.82C16.31,8.47 14.79,7 13,7M20.06,4.06C19.4,3.39 18.22,3.35 16.74,3.81C18.22,4.5 19.5,5.56 20.41,6.89C20.73,5.65 20.64,4.65 20.06,4.06M3.89,20C4.72,20.84 6.4,20.69 8.44,19.76C6.59,18.67 5.17,16.94 4.47,14.88C3.27,17.15 3,19.07 3.89,20Z"
  }));
};

InternetExplorerIcon.displayName = 'InternetExplorerIcon';
InternetExplorerIcon.defaultProps = {
  size: 24
};
var _default = InternetExplorerIcon;
exports["default"] = _default;