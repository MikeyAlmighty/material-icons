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

var BloodBagIcon = function BloodBagIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21,7C20,7 20,6 20,6V5H18V7H16V6C16,4.27 14.75,1 10,1C5.25,1 4,4.27 4,6V19C4,19.33 3.9,21 2,21V23C4.93,23 6,20.61 6,19V6C6,5.88 6.05,3 10,3C13.83,3 14,5.7 14,6V7H12V5H10V6C10,6 10,7 9,7C8,7 8,8 8,8V20C8,20 8,22 13,22C13.24,22 14.13,22 17,22C22,22 22,20 22,20V8C22,8 22,7 21,7M15,19.4C13.34,19.4 12,18.06 12,16.4C12,14.4 15,11 15,11C15,11 18,14.4 18,16.4C18,18.06 16.66,19.4 15,19.4Z"
  }));
};

BloodBagIcon.displayName = 'BloodBagIcon';
BloodBagIcon.defaultProps = {
  size: 24
};
var _default = BloodBagIcon;
exports["default"] = _default;