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

var LanguagePythonTextIcon = function LanguagePythonTextIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,5.69C8.92,1.07 11.1,7 11.28,10.27C11.46,13.53 8.29,17.64 4.31,14.92V20.3L2,18.77V5.69M4.22,7.4V12.78C7.84,14.95 9.08,13.17 9.08,10.09C9.08,5.74 6.57,5.59 4.22,7.4M15.08,4.15C15.08,4.15 14.9,7.64 15.08,11.07C15.44,14.5 19.69,11.84 19.69,11.84V4.92L22,5.2V14.44C22,20.6 15.85,20.3 15.85,20.3L15.08,18C20.46,18 19.78,14.43 19.78,14.43C13.27,16.97 12.77,12.61 12.77,12.61V5.69L15.08,4.15Z"
  }));
};

LanguagePythonTextIcon.displayName = 'LanguagePythonTextIcon';
LanguagePythonTextIcon.defaultProps = {
  size: 24
};
var _default = LanguagePythonTextIcon;
exports["default"] = _default;