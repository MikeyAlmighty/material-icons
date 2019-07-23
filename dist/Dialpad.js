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

var DialpadIcon = function DialpadIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,19C10.9,19 10,19.9 10,21C10,22.1 10.9,23 12,23C13.1,23 14,22.1 14,21C14,19.9 13.1,19 12,19M6,1C4.9,1 4,1.9 4,3C4,4.1 4.9,5 6,5C7.1,5 8,4.1 8,3C8,1.9 7.1,1 6,1M6,7C4.9,7 4,7.9 4,9C4,10.1 4.9,11 6,11C7.1,11 8,10.1 8,9C8,7.9 7.1,7 6,7M6,13C4.9,13 4,13.9 4,15C4,16.1 4.9,17 6,17C7.1,17 8,16.1 8,15C8,13.9 7.1,13 6,13M18,5C19.1,5 20,4.1 20,3C20,1.9 19.1,1 18,1C16.9,1 16,1.9 16,3C16,4.1 16.9,5 18,5M12,13C10.9,13 10,13.9 10,15C10,16.1 10.9,17 12,17C13.1,17 14,16.1 14,15C14,13.9 13.1,13 12,13M18,13C16.9,13 16,13.9 16,15C16,16.1 16.9,17 18,17C19.1,17 20,16.1 20,15C20,13.9 19.1,13 18,13M18,7C16.9,7 16,7.9 16,9C16,10.1 16.9,11 18,11C19.1,11 20,10.1 20,9C20,7.9 19.1,7 18,7M12,7C10.9,7 10,7.9 10,9C10,10.1 10.9,11 12,11C13.1,11 14,10.1 14,9C14,7.9 13.1,7 12,7M12,1C10.9,1 10,1.9 10,3C10,4.1 10.9,5 12,5C13.1,5 14,4.1 14,3C14,1.9 13.1,1 12,1Z"
  }));
};

DialpadIcon.displayName = 'DialpadIcon';
DialpadIcon.defaultProps = {
  size: 24
};
var _default = DialpadIcon;
exports["default"] = _default;