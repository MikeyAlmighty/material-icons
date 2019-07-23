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

var RssOffIcon = function RssOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2.5,3.77L3.78,2.5L21.5,20.22L20.23,21.5L18.73,20H16.73C16.73,19.25 16.67,18.5 16.54,17.81L6.19,7.46C5.5,7.33 4.75,7.27 4,7.27V5.27L2.5,3.77M6.18,15.64C7.38,15.64 8.36,16.62 8.36,17.82C8.36,19 7.38,20 6.18,20C5,20 4,19 4,17.82C4,16.62 4.98,15.64 6.18,15.64M4,10.1C9.47,10.1 13.9,14.53 13.9,20H11.07C11.07,16.1 7.9,12.93 4,12.93V10.1M9.13,5.31C13.59,6.87 17.13,10.41 18.69,14.87L9.13,5.31Z"
  }));
};

RssOffIcon.displayName = 'RssOffIcon';
RssOffIcon.defaultProps = {
  size: 24
};
var _default = RssOffIcon;
exports["default"] = _default;