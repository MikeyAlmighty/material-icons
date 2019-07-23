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

var ToolboxOutlineIcon = function ToolboxOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,18V14H17V15H15V14H9V15H7V14H4V18H20M6.33,8L4.59,12H7V11H9V12H15V11H17V12H19.41L17.67,8H6.33M9,5V6H15V5H9M21.84,12.61C21.94,12.83 22,13.09 22,13.41V18C22,18.53 21.79,19 21.4,19.41C21,19.81 20.55,20 20,20H4C3.45,20 3,19.81 2.6,19.41C2.21,19 2,18.53 2,18V13.41C2,13.09 2.06,12.83 2.16,12.61L4.5,7.22C4.84,6.41 5.45,6 6.33,6H7V5C7,4.45 7.18,4 7.57,3.59C7.96,3.2 8.44,3 9,3H15C15.56,3 16.04,3.2 16.43,3.59C16.82,4 17,4.45 17,5V6H17.67C18.55,6 19.16,6.41 19.5,7.22L21.84,12.61Z"
  }));
};

ToolboxOutlineIcon.displayName = 'ToolboxOutlineIcon';
ToolboxOutlineIcon.defaultProps = {
  size: 24
};
var _default = ToolboxOutlineIcon;
exports["default"] = _default;