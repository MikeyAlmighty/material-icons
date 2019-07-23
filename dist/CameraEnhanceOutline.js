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

var CameraEnhanceOutlineIcon = function CameraEnhanceOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,10L11.06,12.06L9,13L11.06,13.94L12,16L12.94,13.94L15,13L12.94,12.06L12,10M20,5H16.83L15,3H9L7.17,5H4C2.9,5 2,5.9 2,7V19C2,20.1 2.9,21 4,21H20C21.1,21 22,20.1 22,19V7C22,5.9 21.1,5 20,5M20,19H4V7H8.05L8.64,6.35L9.88,5H14.12L15.36,6.35L15.95,7H20V19M12,8C9.24,8 7,10.24 7,13C7,15.76 9.24,18 12,18C14.76,18 17,15.76 17,13C17,10.24 14.76,8 12,8M12,16C10.34,16 9,14.66 9,13C9,11.34 10.34,10 12,10C13.66,10 15,11.34 15,13C15,14.66 13.66,16 12,16Z"
  }));
};

CameraEnhanceOutlineIcon.displayName = 'CameraEnhanceOutlineIcon';
CameraEnhanceOutlineIcon.defaultProps = {
  size: 24
};
var _default = CameraEnhanceOutlineIcon;
exports["default"] = _default;