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

var AndroidMessagesIcon = function AndroidMessagesIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,20H7C5.9,20 5,19.1 5,18V8.94L2.23,5.64C2.09,5.47 2,5.24 2,5C2,4.45 2.45,4 3,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20M8.5,7C8.22,7 8,7.22 8,7.5V8.5C8,8.78 8.22,9 8.5,9H18.5C18.78,9 19,8.78 19,8.5V7.5C19,7.22 18.78,7 18.5,7H8.5M8.5,11C8.22,11 8,11.22 8,11.5V12.5C8,12.78 8.22,13 8.5,13H18.5C18.78,13 19,12.78 19,12.5V11.5C19,11.22 18.78,11 18.5,11H8.5M8.5,15C8.22,15 8,15.22 8,15.5V16.5C8,16.78 8.22,17 8.5,17H13.5C13.78,17 14,16.78 14,16.5V15.5C14,15.22 13.78,15 13.5,15H8.5Z"
  }));
};

AndroidMessagesIcon.displayName = 'AndroidMessagesIcon';
AndroidMessagesIcon.defaultProps = {
  size: 24
};
var _default = AndroidMessagesIcon;
exports["default"] = _default;