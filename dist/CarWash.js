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

var CarWashIcon = function CarWashIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M5,13L6.5,8.5H17.5L19,13M17.5,18C16.67,18 16,17.33 16,16.5C16,15.67 16.67,15 17.5,15C18.33,15 19,15.67 19,16.5C19,17.33 18.33,18 17.5,18M6.5,18C5.67,18 5,17.33 5,16.5C5,15.67 5.67,15 6.5,15C7.33,15 8,15.67 8,16.5C8,17.33 7.33,18 6.5,18M18.92,8C18.72,7.42 18.16,7 17.5,7H6.5C5.84,7 5.28,7.42 5.08,8L3,14V22C3,22.55 3.45,23 4,23H5C5.55,23 6,22.55 6,22V21H18V22C18,22.55 18.45,23 19,23H20C20.55,23 21,22.55 21,22V14M7,5C7.83,5 8.5,4.33 8.5,3.5C8.5,2.5 7,0.8 7,0.8C7,0.8 5.5,2.5 5.5,3.5C5.5,4.33 6.17,5 7,5M12,5C12.83,5 13.5,4.33 13.5,3.5C13.5,2.5 12,0.8 12,0.8C12,0.8 10.5,2.5 10.5,3.5C10.5,4.33 11.17,5 12,5M17,5C17.83,5 18.5,4.33 18.5,3.5C18.5,2.5 17,0.8 17,0.8C17,0.8 15.5,2.5 15.5,3.5C15.5,4.33 16.17,5 17,5Z"
  }));
};

CarWashIcon.displayName = 'CarWashIcon';
CarWashIcon.defaultProps = {
  size: 24
};
var _default = CarWashIcon;
exports["default"] = _default;