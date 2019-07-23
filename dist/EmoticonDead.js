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

var EmoticonDeadIcon = function EmoticonDeadIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.52,22 22,17.52 22,12C22,6.47 17.5,2 12,2M6.76,8.82L7.82,7.76L8.88,8.82L9.94,7.76L11,8.82L9.94,9.88L11,10.94L9.94,12L8.88,10.94L7.82,12L6.76,10.94L7.82,9.88L6.76,8.82M6.89,17.5C7.69,15.46 9.67,14 12,14C14.33,14 16.31,15.46 17.11,17.5H6.89M17.24,10.94L16.18,12L15.12,10.94L14.06,12L13,10.94L14.06,9.88L13,8.82L14.06,7.76L15.12,8.82L16.18,7.76L17.24,8.82L16.18,9.88L17.24,10.94Z"
  }));
};

EmoticonDeadIcon.displayName = 'EmoticonDeadIcon';
EmoticonDeadIcon.defaultProps = {
  size: 24
};
var _default = EmoticonDeadIcon;
exports["default"] = _default;