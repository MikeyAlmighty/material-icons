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

var SmokingIcon = function SmokingIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,16H17V19H2V16M20.5,16H22V19H20.5V16M18,16H19.5V19H18V16M18.85,7.73C19.47,7.12 19.85,6.28 19.85,5.35C19.85,3.5 18.35,2 16.5,2V3.5C17.5,3.5 18.35,4.33 18.35,5.35C18.35,6.37 17.5,7.2 16.5,7.2V8.7C18.74,8.7 20.5,10.53 20.5,12.77V15H22V12.76C22,10.54 20.72,8.62 18.85,7.73M16.03,10.2H14.5C13.5,10.2 12.65,9.22 12.65,8.2C12.65,7.18 13.5,6.45 14.5,6.45V4.95C12.65,4.95 11.15,6.45 11.15,8.3C11.15,10.15 12.65,11.65 14.5,11.65H16.03C17.08,11.65 18,12.39 18,13.7V15H19.5V13.36C19.5,11.55 17.9,10.2 16.03,10.2Z"
  }));
};

SmokingIcon.displayName = 'SmokingIcon';
SmokingIcon.defaultProps = {
  size: 24
};
var _default = SmokingIcon;
exports["default"] = _default;