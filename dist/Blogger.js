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

var BloggerIcon = function BloggerIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14,13H9.95C9.4,13 8.95,13.45 8.95,14C8.95,14.55 9.4,15 9.95,15H14C14.55,15 15,14.55 15,14C15,13.45 14.55,13 14,13M9.95,10H12.55C13.1,10 13.55,9.55 13.55,9C13.55,8.45 13.1,8 12.55,8H9.95C9.4,8 8.95,8.45 8.95,9C8.95,9.55 9.4,10 9.95,10M16,9V10C16,10.55 16.45,11 17,11C17.55,11 18,11.45 18,12V15C18,16.66 16.66,18 15,18H9C7.34,18 6,16.66 6,15V8C6,6.34 7.34,5 9,5H13C14.66,5 16,6.34 16,8M20,2H4C2.89,2 2,2.89 2,4V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V4C22,2.89 21.1,2 20,2Z"
  }));
};

BloggerIcon.displayName = 'BloggerIcon';
BloggerIcon.defaultProps = {
  size: 24
};
var _default = BloggerIcon;
exports["default"] = _default;