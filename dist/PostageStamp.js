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

var PostageStampIcon = function PostageStampIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,2V5.5C3.1,5.5 4,6.62 4,8C4,9.38 3.1,10.5 2,10.5V13.5C3.1,13.5 4,14.62 4,16C4,17.38 3.1,18.5 2,18.5V22H5.5C5.5,20.9 6.62,20 8,20C9.38,20 10.5,20.9 10.5,22H13.5C13.5,20.9 14.62,20 16,20C17.38,20 18.5,20.9 18.5,22H22V18.5C20.9,18.5 20,17.38 20,16V16C20,14.62 20.9,13.5 22,13.5V10.5C20.9,10.5 20,9.38 20,8V8C20,6.62 20.9,5.5 22,5.5V2H18.5C18.5,3.1 17.38,4 16,4C14.62,4 13.5,3.1 13.5,2H10.5C10.5,3.1 9.38,4 8,4C6.62,4 5.5,3.1 5.5,2H2M6,6H18V18H6V6M9,7C7.9,7 7,7.9 7,9C7,10.1 7.9,11 9,11C10.1,11 11,10.1 11,9C11,7.9 10.1,7 9,7M17,10L14,13L12,12L7,17H17V10Z"
  }));
};

PostageStampIcon.displayName = 'PostageStampIcon';
PostageStampIcon.defaultProps = {
  size: 24
};
var _default = PostageStampIcon;
exports["default"] = _default;