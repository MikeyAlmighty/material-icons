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

var FileCadBoxIcon = function FileCadBoxIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,3C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M11.25,5.25H12.75V6.38C13.58,6.38 14.25,7.05 14.25,7.88V10.37L14.11,10.5L15.18,12.36C15.55,11.76 15.75,11.07 15.75,10.36H17.25C17.26,11.61 16.81,12.82 16,13.77L18,17.25V18.75L16.7,18L14.84,14.78C13.12,15.91 10.89,15.91 9.16,14.78L7.3,18L6,18.75V17.25L9.89,10.5L9.75,10.37V7.88C9.75,7.05 10.42,6.38 11.25,6.38M12,7.88C11.16,7.88 10.74,8.9 11.34,9.5C11.94,10.08 12.95,9.65 12.94,8.81C12.94,8.29 12.5,7.88 12,7.88M11,11.6L9.91,13.5C11.17,14.36 12.83,14.36 14.09,13.5L13,11.6C12.43,12.11 11.57,12.11 11,11.6Z"
  }));
};

FileCadBoxIcon.displayName = 'FileCadBoxIcon';
FileCadBoxIcon.defaultProps = {
  size: 24
};
var _default = FileCadBoxIcon;
exports["default"] = _default;