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

var CornIcon = function CornIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11,12H8.82C9.62,12.5 10.35,13.07 11,13.68V12M7,11C7.27,5.88 9.37,2 12,2C14.66,2 16.77,5.94 17,11.12C18.5,10.43 20.17,10 22,10C16.25,12.57 18.25,22 12,22C6,22 7.93,12.57 2,10C3.82,10 5.5,10.4 7,11M11,11V9H8.24L8.03,11H11M11,8V6H9.05C8.8,6.6 8.6,7.27 8.43,8H11M11,5V3.3C10.45,3.63 9.95,4.22 9.5,5H11M12,3V5H13V6H12V8H14V9H12V11H15V12H12V14H14V15H12.23C13.42,16.45 14.15,18 14.32,19.23C15.31,17.56 15.96,14.84 16,11.76C15.94,7 14.13,3 12,3Z"
  }));
};

CornIcon.displayName = 'CornIcon';
CornIcon.defaultProps = {
  size: 24
};
var _default = CornIcon;
exports["default"] = _default;