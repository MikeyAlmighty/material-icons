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

var AndroidHeadIcon = function AndroidHeadIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M8,11.5C7.31,11.5 6.75,12.06 6.75,12.75C6.75,13.44 7.31,14 8,14C8.69,14 9.25,13.44 9.25,12.75C9.25,12.06 8.69,11.5 8,11.5M16,11.5C15.31,11.5 14.75,12.06 14.75,12.75C14.75,13.44 15.31,14 16,14C16.69,14 17.25,13.44 17.25,12.75C17.25,12.06 16.69,11.5 16,11.5M12,7C13.5,7 14.9,7.33 16.18,7.91L18.34,5.75C18.73,5.36 19.36,5.36 19.75,5.75C20.14,6.14 20.14,6.77 19.75,7.16L17.95,8.96C20.41,10.79 22,13.71 22,17H2C2,13.71 3.59,10.79 6.05,8.96L4.25,7.16C3.86,6.77 3.86,6.14 4.25,5.75C4.64,5.36 5.27,5.36 5.66,5.75L7.82,7.91C9.1,7.33 10.5,7 12,7Z"
  }));
};

AndroidHeadIcon.displayName = 'AndroidHeadIcon';
AndroidHeadIcon.defaultProps = {
  size: 24
};
var _default = AndroidHeadIcon;
exports["default"] = _default;