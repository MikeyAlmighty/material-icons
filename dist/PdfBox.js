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

var PdfBoxIcon = function PdfBoxIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,10.5H13V13.5H12V10.5M7,11.5H8V10.5H7V11.5M20,6V18C20,19.1 19.1,20 18,20H6C4.9,20 4,19.1 4,18V6C4,4.9 4.9,4 6,4H18C19.1,4 20,4.9 20,6M9.5,10.5C9.5,9.67 8.83,9 8,9H5.5V15H7V13H8C8.83,13 9.5,12.33 9.5,11.5V10.5M14.5,10.5C14.5,9.67 13.83,9 13,9H10.5V15H13C13.83,15 14.5,14.33 14.5,13.5V10.5M18.5,9H15.5V15H17V13H18.5V11.5H17V10.5H18.5V9Z"
  }));
};

PdfBoxIcon.displayName = 'PdfBoxIcon';
PdfBoxIcon.defaultProps = {
  size: 24
};
var _default = PdfBoxIcon;
exports["default"] = _default;