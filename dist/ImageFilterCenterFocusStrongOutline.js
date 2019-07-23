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

var ImageFilterCenterFocusStrongOutlineIcon = function ImageFilterCenterFocusStrongOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17,12C17,7.55 11.62,5.31 8.46,8.46C5.31,11.61 7.55,17 12,17C14.76,17 17,14.76 17,12M12,15C9.33,15 8,11.77 9.88,9.88C11.77,8 15,9.33 15,12C15,13.66 13.66,15 12,15M5,15H3V19C3,20.1 3.9,21 5,21H9V19H5M5,5H9V3H5C3.9,3 3,3.9 3,5V9H5M19,3H15V5H19V9H21V5C21,3.9 20.1,3 19,3M19,19H15V21H19C20.1,21 21,20.1 21,19V15H19"
  }));
};

ImageFilterCenterFocusStrongOutlineIcon.displayName = 'ImageFilterCenterFocusStrongOutlineIcon';
ImageFilterCenterFocusStrongOutlineIcon.defaultProps = {
  size: 24
};
var _default = ImageFilterCenterFocusStrongOutlineIcon;
exports["default"] = _default;