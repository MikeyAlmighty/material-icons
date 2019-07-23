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

var BrailleIcon = function BrailleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7,8C7,7.45 7.45,7 8,7C8.55,7 9,7.45 9,8V12.47L10.21,12.6L15.15,14.79C15.67,15.03 16,15.56 16,16.14V20.5C15.97,21.32 15.32,21.97 14.5,22H8C7.62,22 7.26,21.85 7,21.57L2.1,17.37L2.84,16.6C3.03,16.39 3.3,16.28 3.58,16.28H3.8L7,18V8M19.5,2C18.67,2 18,2.67 18,3.5C18,4.33 18.67,5 19.5,5C20.33,5 21,4.33 21,3.5C21,2.67 20.33,2 19.5,2M19.5,7C18.67,7 18,7.67 18,8.5C18,9.33 18.67,10 19.5,10C20.33,10 21,9.33 21,8.5C21,7.67 20.33,7 19.5,7M14.5,7C13.67,7 13,7.67 13,8.5C13,9.33 13.67,10 14.5,10C15.33,10 16,9.33 16,8.5C16,7.67 15.33,7 14.5,7M19.5,12C18.67,12 18,12.67 18,13.5C18,14.33 18.67,15 19.5,15C20.33,15 21,14.33 21,13.5C21,12.67 20.33,12 19.5,12Z"
  }));
};

BrailleIcon.displayName = 'BrailleIcon';
BrailleIcon.defaultProps = {
  size: 24
};
var _default = BrailleIcon;
exports["default"] = _default;