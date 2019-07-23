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

var CellphoneLockIcon = function CellphoneLockIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17,1H7C5.9,1 5,1.9 5,3V6H7V4H17V20H7V18H5V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.9 18.1,1 17,1M8.8,11V9.5C8.8,8.1 7.4,7 6,7C4.6,7 3.2,8.1 3.2,9.5V11C2.6,11 2,11.6 2,12.2V15.7C2,16.4 2.6,17 3.2,17H8.7C9.4,17 10,16.4 10,15.8V12.3C10,11.6 9.4,11 8.8,11M7.5,11H4.5V9.5C4.5,8.7 5.2,8.2 6,8.2C6.8,8.2 7.5,8.7 7.5,9.5V11Z"
  }));
};

CellphoneLockIcon.displayName = 'CellphoneLockIcon';
CellphoneLockIcon.defaultProps = {
  size: 24
};
var _default = CellphoneLockIcon;
exports["default"] = _default;