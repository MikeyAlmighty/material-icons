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

var QiIcon = function QiIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12.09,6.56V14.64C12.09,14.72 12,14.79 11.94,14.79C9.62,14.79 7.75,12.91 7.75,10.6C7.75,8.28 9.62,6.4 11.94,6.4C12,6.4 12.09,6.47 12.09,6.56M12.09,17.86V20.29C12.06,21.69 13.12,22.87 14.5,23C14.66,23 14.78,22.89 14.79,22.73V4.47C14.78,4.3 14.68,4.15 14.5,4.09C10.92,2.67 6.86,4.44 5.44,8.03C4,11.63 5.79,15.69 9.38,17.11C10.16,17.42 11,17.58 11.81,17.6C11.95,17.59 12.07,17.71 12.08,17.87M16.19,5.5V15.72C16.19,16 16.19,16.2 16.46,16V16C19.42,13.5 19.81,9.09 17.33,6.13C17.07,5.81 16.77,5.5 16.46,5.26C16.19,5.05 16.19,5.26 16.19,5.53M14.79,2.43C14.79,1.66 15.42,1.03 16.19,1.03C16.96,1.03 17.59,1.66 17.59,2.43C17.59,3.2 16.96,3.83 16.19,3.83V3.83C15.42,3.83 14.79,3.2 14.79,2.43"
  }));
};

QiIcon.displayName = 'QiIcon';
QiIcon.defaultProps = {
  size: 24
};
var _default = QiIcon;
exports["default"] = _default;