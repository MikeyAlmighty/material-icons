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

var CameraGoproIcon = function CameraGoproIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,5H15C13.9,5 13,5.9 13,7V12C13,13.1 13.9,14 15,14H20C21.1,14 22,13.1 22,12V7C22,5.9 21.1,5 20,5M17.5,12.5C15.84,12.5 14.5,11.16 14.5,9.5C14.5,7.84 15.84,6.5 17.5,6.5C19.16,6.5 20.5,7.84 20.5,9.5C20.5,11.16 19.16,12.5 17.5,12.5M17.5,11C16.67,11 16,10.33 16,9.5C16,8.67 16.67,8 17.5,8C18.33,8 19,8.67 19,9.5C19,10.33 18.33,11 17.5,11M12,15V5H4C2.9,5 2,5.9 2,7V17C2,18.1 2.9,19 4,19H20C21.1,19 22,18.1 22,17V15H12M10,12H4V7H10V12Z"
  }));
};

CameraGoproIcon.displayName = 'CameraGoproIcon';
CameraGoproIcon.defaultProps = {
  size: 24
};
var _default = CameraGoproIcon;
exports["default"] = _default;