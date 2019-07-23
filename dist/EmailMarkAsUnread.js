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

var EmailMarkAsUnreadIcon = function EmailMarkAsUnreadIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.84,7H16.22L10.5,4L4,7.41V17C2.9,17 2,16.1 2,15V7.17C2,6.5 2.28,6.06 2.81,5.81L10.5,2L18.05,5.81C18.5,6.09 18.78,6.5 18.84,7M7,8H20C21.1,8 22,8.9 22,10V19C22,20.1 21.1,21 20,21H7C5.9,21 5,20.1 5,19V10C5,8.9 5.9,8 7,8M20,11.67V10L13.5,13.31L7,10V11.67L13.5,15L20,11.67Z"
  }));
};

EmailMarkAsUnreadIcon.displayName = 'EmailMarkAsUnreadIcon';
EmailMarkAsUnreadIcon.defaultProps = {
  size: 24
};
var _default = EmailMarkAsUnreadIcon;
exports["default"] = _default;