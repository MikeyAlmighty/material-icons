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

var SafeIcon = function SafeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4,4C2.9,4 2,4.9 2,6V17C2,18.1 2.9,19 4,19V20H6V19H17V20H19V19C20.1,19 21,18.1 21,17V16H22V14H21V9H22V7H21V6C21,4.9 20.1,4 19,4H4M4,6H19V17H4V6M13.5,7.5C11.29,7.5 9.5,9.29 9.5,11.5C9.5,13.71 11.29,15.5 13.5,15.5C15.71,15.5 17.5,13.71 17.5,11.5C17.5,9.29 15.71,7.5 13.5,7.5M5,9V14H7V9H5M13.5,9.5C14.6,9.5 15.5,10.4 15.5,11.5C15.5,12.6 14.6,13.5 13.5,13.5C12.4,13.5 11.5,12.6 11.5,11.5C11.5,10.4 12.4,9.5 13.5,9.5Z"
  }));
};

SafeIcon.displayName = 'SafeIcon';
SafeIcon.defaultProps = {
  size: 24
};
var _default = SafeIcon;
exports["default"] = _default;