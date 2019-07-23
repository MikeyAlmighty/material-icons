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

var ScrewMachineFlatTopIcon = function ScrewMachineFlatTopIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14.5,7.3L13.5,8V7H10.5V10L9.5,10.7V11.7L14.5,8.4V7.3M14.5,11.3L13.5,12V10L10.5,12V14L9.5,14.7V15.7L14.5,12.4V11.3M14.5,15.3L13.5,16V14L10.5,16V18L9.5,18.7V19.7L14.5,16.4V15.3M8,3C8,3 7,3 7,4L10,6H14L17,4C17,4 17,3 16,3C15,3 8,3 8,3M13.5,18V21H10.5V20L13.5,18Z"
  }));
};

ScrewMachineFlatTopIcon.displayName = 'ScrewMachineFlatTopIcon';
ScrewMachineFlatTopIcon.defaultProps = {
  size: 24
};
var _default = ScrewMachineFlatTopIcon;
exports["default"] = _default;