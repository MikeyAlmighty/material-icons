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

var FileDocumentEditIcon = function FileDocumentEditIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,2C4.89,2 4,2.89 4,4V20C4,21.1 4.9,22 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
  }));
};

FileDocumentEditIcon.displayName = 'FileDocumentEditIcon';
FileDocumentEditIcon.defaultProps = {
  size: 24
};
var _default = FileDocumentEditIcon;
exports["default"] = _default;