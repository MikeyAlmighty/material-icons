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

var OperaIcon = function OperaIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M9.04,17.07C8.04,15.9 7.4,14.16 7.35,12.21V11.79C7.4,9.84 8.04,8.1 9.04,6.93C9.86,5.95 10.93,5.37 12.1,5.37C14.72,5.37 16.84,8.34 16.84,12C16.84,15.66 14.72,18.63 12.1,18.63C10.93,18.63 10.33,18.5 9.04,17.07M12.03,3H12C7.03,3 3,7.03 3,12C3,16.83 6.8,20.77 11.57,21H12C14.3,21 16.4,20.13 18,18.71C19.84,17.06 21,14.67 21,12C21,9.33 19.84,6.94 18,5.29C16.41,3.87 14.32,3 12.03,3Z"
  }));
};

OperaIcon.displayName = 'OperaIcon';
OperaIcon.defaultProps = {
  size: 24
};
var _default = OperaIcon;
exports["default"] = _default;