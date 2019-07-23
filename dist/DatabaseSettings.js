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

var DatabaseSettingsIcon = function DatabaseSettingsIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22M12,3C16.42,3 20,4.79 20,7C20,9.21 16.42,11 12,11C7.58,11 4,9.21 4,7C4,4.79 7.58,3 12,3M4,9C4,11.21 7.58,13 12,13C16.42,13 20,11.21 20,9V12C20,14.21 16.42,16 12,16C7.58,16 4,14.21 4,12V9M4,14C4,16.21 7.58,18 12,18C16.42,18 20,16.21 20,14V17C20,18.19 18.95,19.27 17.29,20H6.71C5.05,19.27 4,18.19 4,17V14Z"
  }));
};

DatabaseSettingsIcon.displayName = 'DatabaseSettingsIcon';
DatabaseSettingsIcon.defaultProps = {
  size: 24
};
var _default = DatabaseSettingsIcon;
exports["default"] = _default;