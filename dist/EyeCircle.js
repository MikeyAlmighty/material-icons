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

var EyeCircleIcon = function EyeCircleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,9.5C10.62,9.5 9.5,10.62 9.5,12C9.5,13.38 10.62,14.5 12,14.5C13.38,14.5 14.5,13.38 14.5,12C14.5,10.62 13.38,9.5 12,9.5M12,13C11.45,13 11,12.55 11,12C11,11.45 11.45,11 12,11C12.55,11 13,11.45 13,12C13,12.55 12.55,13 12,13M12,9.5C10.62,9.5 9.5,10.62 9.5,12C9.5,13.38 10.62,14.5 12,14.5C13.38,14.5 14.5,13.38 14.5,12C14.5,10.62 13.38,9.5 12,9.5M12,13C11.45,13 11,12.55 11,12C11,11.45 11.45,11 12,11C12.55,11 13,11.45 13,12C13,12.55 12.55,13 12,13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,16C9.37,16 7,14.43 6,12C7.38,8.69 11.19,7.12 14.5,8.5C16.08,9.16 17.34,10.42 18,12C17,14.43 14.63,16 12,16M12,9.5C10.62,9.5 9.5,10.62 9.5,12C9.5,13.38 10.62,14.5 12,14.5C13.38,14.5 14.5,13.38 14.5,12C14.5,10.62 13.38,9.5 12,9.5M12,13C11.45,13 11,12.55 11,12C11,11.45 11.45,11 12,11C12.55,11 13,11.45 13,12C13,12.55 12.55,13 12,13Z"
  }));
};

EyeCircleIcon.displayName = 'EyeCircleIcon';
EyeCircleIcon.defaultProps = {
  size: 24
};
var _default = EyeCircleIcon;
exports["default"] = _default;