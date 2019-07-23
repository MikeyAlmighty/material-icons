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

var FlashRedEyeIcon = function FlashRedEyeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16,5C15.44,5 15,5.44 15,6C15,6.56 15.44,7 16,7C16.56,7 17,6.56 17,6C17,5.44 16.56,5 16,5M16,2C13.27,2 10.94,3.66 10,6C10.94,8.34 13.27,10 16,10C18.73,10 21.06,8.34 22,6C21.06,3.66 18.73,2 16,2M16,3.5C17.38,3.5 18.5,4.62 18.5,6C18.5,7.38 17.38,8.5 16,8.5C14.62,8.5 13.5,7.38 13.5,6C13.5,4.62 14.62,3.5 16,3.5M3,2V14H6V23L13,11H9L10.12,8.5C9.44,7.76 8.88,6.93 8.5,6C9.19,4.29 10.5,2.88 12.11,2H3Z"
  }));
};

FlashRedEyeIcon.displayName = 'FlashRedEyeIcon';
FlashRedEyeIcon.defaultProps = {
  size: 24
};
var _default = FlashRedEyeIcon;
exports["default"] = _default;