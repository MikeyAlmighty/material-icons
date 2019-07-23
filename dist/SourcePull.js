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

var SourcePullIcon = function SourcePullIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M6,3C7.66,3 9,4.34 9,6C9,7.31 8.17,8.42 7,8.83V15.17C8.17,15.58 9,16.69 9,18C9,19.66 7.66,21 6,21C4.34,21 3,19.66 3,18C3,16.69 3.83,15.58 5,15.17V8.83C3.83,8.42 3,7.31 3,6C3,4.34 4.34,3 6,3M6,5C5.45,5 5,5.45 5,6C5,6.55 5.45,7 6,7C6.55,7 7,6.55 7,6C7,5.45 6.55,5 6,5M6,17C5.45,17 5,17.45 5,18C5,18.55 5.45,19 6,19C6.55,19 7,18.55 7,18C7,17.45 6.55,17 6,17M21,18C21,19.66 19.66,21 18,21C16.34,21 15,19.66 15,18C15,16.69 15.83,15.58 17,15.17V7H15V10.25L10.75,6L15,1.75V5H17C18.1,5 19,5.9 19,7V15.17C20.17,15.58 21,16.69 21,18M18,17C17.45,17 17,17.45 17,18C17,18.55 17.45,19 18,19C18.55,19 19,18.55 19,18C19,17.45 18.55,17 18,17Z"
  }));
};

SourcePullIcon.displayName = 'SourcePullIcon';
SourcePullIcon.defaultProps = {
  size: 24
};
var _default = SourcePullIcon;
exports["default"] = _default;