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

var GoogleAssistantIcon = function GoogleAssistantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7,2C3.69,2 1,4.69 1,8C1,11.31 3.69,14 7,14C10.31,14 13,11.31 13,8C13,4.69 10.31,2 7,2M21.5,6C20.67,6 20,6.67 20,7.5C20,8.33 20.67,9 21.5,9C22.33,9 23,8.33 23,7.5C23,6.67 22.33,6 21.5,6M17,8C15.34,8 14,9.34 14,11C14,12.66 15.34,14 17,14C18.66,14 20,12.66 20,11C20,9.34 18.66,8 17,8M17,15C15.07,15 13.5,16.57 13.5,18.5C13.5,20.43 15.07,22 17,22C18.93,22 20.5,20.43 20.5,18.5C20.5,16.57 18.93,15 17,15Z"
  }));
};

GoogleAssistantIcon.displayName = 'GoogleAssistantIcon';
GoogleAssistantIcon.defaultProps = {
  size: 24
};
var _default = GoogleAssistantIcon;
exports["default"] = _default;