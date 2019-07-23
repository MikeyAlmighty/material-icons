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

var CameraRetakeOutlineIcon = function CameraRetakeOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,5H16.83L15,3H9L7.17,5H4C2.9,5 2,5.9 2,7V19C2,20.1 2.9,21 4,21H20C21.1,21 22,20.1 22,19V7C22,5.9 21.1,5 20,5M20,19H4V7H8.05L9.88,5H14.12L16,7H20V19M12,18C10.92,18 9.86,17.65 9,17L10.44,15.56C10.91,15.85 11.45,16 12,16C13.66,16 15,14.66 15,13C15,11.34 13.66,10 12,10C10.74,10 9.6,10.8 9.18,12H11L8,15L5,12H7.1C7.65,9.29 10.29,7.55 13,8.1C15.7,8.65 17.45,11.29 16.9,14C16.42,16.33 14.38,18 12,18Z"
  }));
};

CameraRetakeOutlineIcon.displayName = 'CameraRetakeOutlineIcon';
CameraRetakeOutlineIcon.defaultProps = {
  size: 24
};
var _default = CameraRetakeOutlineIcon;
exports["default"] = _default;