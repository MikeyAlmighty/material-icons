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

var Cpu64BitIcon = function Cpu64BitIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9,3V5H7C5.9,5 5,5.9 5,7V9H3V11H5V13H3V15H5V17C5,18.1 5.9,19 7,19H9V21H11V19H13V21H15V19H17C18.1,19 19,18.1 19,17V15H21V13H19V11H21V9H19V7C19,5.9 18.1,5 17,5H15V3H13V5H11V3M8,9H11.5V10.5H8.5V11.25H10.5C11.05,11.25 11.5,11.7 11.5,12.25V14C11.5,14.55 11.05,15 10.5,15H8C7.45,15 7,14.55 7,14V10C7,9.45 7.45,9 8,9M12.5,9H14V11H15.5V9H17V15H15.5V12.5H12.5M8.5,12.75V13.5H10V12.75"
  }));
};

Cpu64BitIcon.displayName = 'Cpu64BitIcon';
Cpu64BitIcon.defaultProps = {
  size: 24
};
var _default = Cpu64BitIcon;
exports["default"] = _default;