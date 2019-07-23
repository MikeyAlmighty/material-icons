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

var CodeStringIcon = function CodeStringIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5M12.5,11H11.5C10.67,11 10,10.33 10,9.5C10,8.67 10.67,8 11.5,8H12.5C13.33,8 14,8.67 14,9.5H16C16,7.57 14.43,6 12.5,6H11.5C9.57,6 8,7.57 8,9.5C8,11.43 9.57,13 11.5,13H12.5C13.33,13 14,13.67 14,14.5C14,15.33 13.33,16 12.5,16H11.5C10.67,16 10,15.33 10,14.5H8C8,16.43 9.57,18 11.5,18H12.5C14.43,18 16,16.43 16,14.5C16,12.57 14.43,11 12.5,11Z"
  }));
};

CodeStringIcon.displayName = 'CodeStringIcon';
CodeStringIcon.defaultProps = {
  size: 24
};
var _default = CodeStringIcon;
exports["default"] = _default;