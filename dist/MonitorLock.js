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

var MonitorLockIcon = function MonitorLockIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.5,13C21.88,13 23,14.12 23,15.5V16C23.55,16 24,16.45 24,17V21C24,21.55 23.55,22 23,22H18C17.45,22 17,21.55 17,21V17C17,16.45 17.45,16 18,16V15.5C18,14.12 19.12,13 20.5,13M20.5,14C19.67,14 19,14.67 19,15.5V16H22V15.5C22,14.67 21.33,14 20.5,14M20,4H2V16H15V18H13V20H15V22H7V20H9V18H2C0.89,18 0,17.1 0,16V4C0,2.89 0.89,2 2,2H20C21.1,2 22,2.9 22,4V11.53C21.41,11.19 20.73,11 20,11V4Z"
  }));
};

MonitorLockIcon.displayName = 'MonitorLockIcon';
MonitorLockIcon.defaultProps = {
  size: 24
};
var _default = MonitorLockIcon;
exports["default"] = _default;