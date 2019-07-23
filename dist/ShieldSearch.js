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

var ShieldSearchIcon = function ShieldSearchIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9M17.86,19.31C16.23,21.22 14.28,22.45 12,23C9.44,22.39 7.3,20.93 5.58,18.63C3.86,16.34 3,13.8 3,11V5L12,1L21,5V11C21,13.39 20.36,15.61 19.08,17.67L16.17,14.76C16.69,13.97 17,13 17,12C17,9.24 14.76,7 12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C13,17 13.97,16.69 14.76,16.17L17.86,19.31Z"
  }));
};

ShieldSearchIcon.displayName = 'ShieldSearchIcon';
ShieldSearchIcon.defaultProps = {
  size: 24
};
var _default = ShieldSearchIcon;
exports["default"] = _default;