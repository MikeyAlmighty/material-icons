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

var AttachmentIcon = function AttachmentIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.5,18C4.46,18 2,15.54 2,12.5C2,9.46 4.46,7 7.5,7H18C20.21,7 22,8.79 22,11C22,13.21 20.21,15 18,15H9.5C8.12,15 7,13.88 7,12.5C7,11.12 8.12,10 9.5,10H17V11.5H9.5C8.95,11.5 8.5,11.95 8.5,12.5C8.5,13.05 8.95,13.5 9.5,13.5H18C19.38,13.5 20.5,12.38 20.5,11C20.5,9.62 19.38,8.5 18,8.5H7.5C5.29,8.5 3.5,10.29 3.5,12.5C3.5,14.71 5.29,16.5 7.5,16.5H17V18H7.5Z"
  }));
};

AttachmentIcon.displayName = 'AttachmentIcon';
AttachmentIcon.defaultProps = {
  size: 24
};
var _default = AttachmentIcon;
exports["default"] = _default;