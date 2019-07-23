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

var PencilLockOutlineIcon = function PencilLockOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16.1,9L17,9.9L7.9,19H7V18.1L16.1,9M19.7,3C19.5,3 19.2,3.1 19,3.3L17.2,5.1L20.9,8.9L22.7,7C23.1,6.6 23.1,6 22.7,5.6L20.4,3.3C20.2,3.1 19.9,3 19.7,3M16.1,6.2L5,17.2V21H8.8L19.8,9.9L16.1,6.2M8,5V4.5C8,3.1 6.9,2 5.5,2C4.1,2 3,3.1 3,4.5V5C2.4,5 2,5.4 2,6V10C2,10.6 2.4,11 3,11H8C8.6,11 9,10.6 9,10V6C9,5.4 8.6,5 8,5M7,5H4V4.5C4,3.7 4.7,3 5.5,3C6.3,3 7,3.7 7,4.5V5Z"
  }));
};

PencilLockOutlineIcon.displayName = 'PencilLockOutlineIcon';
PencilLockOutlineIcon.defaultProps = {
  size: 24
};
var _default = PencilLockOutlineIcon;
exports["default"] = _default;