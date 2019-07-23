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

var ResistorNodesIcon = function ResistorNodesIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,11H3.67C4.08,9.83 5.19,9 6.5,9C8.16,9 9.5,10.34 9.5,12C9.5,12.65 9.29,13.25 8.94,13.74L10.07,15.35L13.11,4L14.61,6.13L16.7,9.11L17.5,9C18.81,9 19.92,9.83 20.33,11H22V13H20.33C19.92,14.17 18.81,15 17.5,15C15.84,15 14.5,13.66 14.5,12C14.5,11.35 14.71,10.75 15.06,10.26L13.93,8.65L10.89,20L7.3,14.89C7.05,14.96 6.78,15 6.5,15C5.19,15 4.08,14.17 3.67,13H2V11M17.5,10.5C16.67,10.5 16,11.17 16,12C16,12.83 16.67,13.5 17.5,13.5C18.33,13.5 19,12.83 19,12C19,11.17 18.33,10.5 17.5,10.5M6.5,10.5C5.67,10.5 5,11.17 5,12C5,12.83 5.67,13.5 6.5,13.5C7.33,13.5 8,12.83 8,12C8,11.17 7.33,10.5 6.5,10.5Z"
  }));
};

ResistorNodesIcon.displayName = 'ResistorNodesIcon';
ResistorNodesIcon.defaultProps = {
  size: 24
};
var _default = ResistorNodesIcon;
exports["default"] = _default;