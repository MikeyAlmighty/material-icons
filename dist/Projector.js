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

var ProjectorIcon = function ProjectorIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16,6C14.87,6 13.77,6.35 12.84,7H4C2.89,7 2,7.89 2,9V15C2,16.11 2.89,17 4,17H5V18C5,18.55 5.45,19 6,19H8C8.55,19 9,18.55 9,18V17H15V18C15,18.55 15.45,19 16,19H18C18.55,19 19,18.55 19,18V17H20C21.11,17 22,16.11 22,15V9C22,7.89 21.11,7 20,7H19.15C18.23,6.35 17.13,6 16,6M16,7.5C17.93,7.5 19.5,9.07 19.5,11C19.5,12.93 17.93,14.5 16,14.5C14.07,14.5 12.5,12.93 12.5,11C12.5,9.07 14.07,7.5 16,7.5M4,9H8V10H4V9M16,9C14.9,9 14,9.9 14,11C14,12.1 14.9,13 16,13C17.1,13 18,12.1 18,11C18,9.9 17.1,9 16,9M4,11H8V12H4V11M4,13H8V14H4V13Z"
  }));
};

ProjectorIcon.displayName = 'ProjectorIcon';
ProjectorIcon.defaultProps = {
  size: 24
};
var _default = ProjectorIcon;
exports["default"] = _default;