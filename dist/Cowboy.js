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

var CowboyIcon = function CowboyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,22H4V20C4,17.79 7.58,16 12,16C16.42,16 20,17.79 20,20M8,9H16V10C16,12.19 14.19,14 12,14C9.81,14 8,12.19 8,10M7.5,6C7.5,6 8,5 8.5,4C9,2.95 9.4,2 10.5,2V2C11.1,2 11.64,2.27 12,2.68V2.67C12.37,2.26 12.9,2 13.5,2V2C14.6,2 15.5,2.9 15.5,4C16,5 16.5,6 16.5,6H18C18,6 18,5.5 18,5C18,4.45 18.45,4 19,4C19.55,4 20,4.45 20,5C20,5.31 20,5.65 20,6C20,7.1 19.1,8 18,8C14.93,8 9.07,8 6,8C4.9,8 4,7.1 4,6C4,5.65 4,5.31 4,5C4,4.45 4.45,4 5,4C5.55,4 6,4.45 6,5C6,5.5 6,6 6,6"
  }));
};

CowboyIcon.displayName = 'CowboyIcon';
CowboyIcon.defaultProps = {
  size: 24
};
var _default = CowboyIcon;
exports["default"] = _default;