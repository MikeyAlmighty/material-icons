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

var ServerSecurityIcon = function ServerSecurityIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,1H19C19.55,1 20,1.45 20,2V6C20,6.55 19.55,7 19,7H3C2.45,7 2,6.55 2,6V2C2,1.45 2.45,1 3,1M3,9H19C19.55,9 20,9.45 20,10V10.67L17.5,9.56L11,12.44V15H3C2.45,15 2,14.55 2,14V10C2,9.45 2.45,9 3,9M3,17H11C11.06,19.25 12,21.4 13.46,23H3C2.45,23 2,22.55 2,22V18C2,17.45 2.45,17 3,17M8,5H9V3H8V5M8,13H9V11H8V13M8,21H9V19H8V21M4,3V5H6V3H4M4,11V13H6V11H4M4,19V21H6V19H4M17.5,12L22,14V17C22,19.78 20.08,22.37 17.5,23C14.92,22.37 13,19.78 13,17V14L17.5,12M17.5,13.94L15,15.06V17.72C15,19.26 16.07,20.7 17.5,21.06V13.94Z"
  }));
};

ServerSecurityIcon.displayName = 'ServerSecurityIcon';
ServerSecurityIcon.defaultProps = {
  size: 24
};
var _default = ServerSecurityIcon;
exports["default"] = _default;