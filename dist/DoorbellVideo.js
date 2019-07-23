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

var DoorbellVideoIcon = function DoorbellVideoIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.97,2C6.86,2 6,2.88 6,4V19.92C6,21.03 6.86,21.91 7.97,21.91H15.94C17.04,21.91 17.93,21.03 17.93,19.92V4C17.93,2.88 17.04,2 15.94,2H7.97M11.95,5.5C12.78,5.5 13.45,6.15 13.45,6.97C13.45,7.8 12.78,8.47 11.95,8.47C11.13,8.47 10.46,7.8 10.46,6.97C10.46,6.15 11.13,5.5 11.95,5.5M7.97,9.96H15.94V19.92H7.97V9.96M12,13C10.9,13 10,13.87 10,14.97C10,16.07 10.9,16.97 12,16.97C13.1,16.97 14,16.07 14,14.97C14,13.87 13.1,13 12,13Z"
  }));
};

DoorbellVideoIcon.displayName = 'DoorbellVideoIcon';
DoorbellVideoIcon.defaultProps = {
  size: 24
};
var _default = DoorbellVideoIcon;
exports["default"] = _default;