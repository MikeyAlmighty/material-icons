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

var EyeCircleOutlineIcon = function EyeCircleOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22M12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20M12,11C12.55,11 13,11.45 13,12C13,12.55 12.55,13 12,13C11.45,13 11,12.55 11,12C11,11.45 11.45,11 12,11M12,8C14.63,8 17,9.57 18,12C16.62,15.31 12.81,16.88 9.5,15.5C7.92,14.84 6.66,13.58 6,12C7,9.57 9.37,8 12,8M12,9.5C10.62,9.5 9.5,10.62 9.5,12C9.5,13.38 10.62,14.5 12,14.5C13.38,14.5 14.5,13.38 14.5,12C14.5,10.62 13.38,9.5 12,9.5"
  }));
};

EyeCircleOutlineIcon.displayName = 'EyeCircleOutlineIcon';
EyeCircleOutlineIcon.defaultProps = {
  size: 24
};
var _default = EyeCircleOutlineIcon;
exports["default"] = _default;