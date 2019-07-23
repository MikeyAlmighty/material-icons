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

var CarParkingLightsIcon = function CarParkingLightsIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.3,9.2C8.1,9.6 9,10.5 9,12C9,13.5 8.1,14.4 7.3,14.8C6.9,13.4 6.9,10.6 7.3,9.2M6.5,7C4.5,7 4.5,17 6.5,17C8.5,17 11,15.1 11,12C11,8.9 8.5,7 6.5,7M16.7,9.2C17,10.6 17,13.4 16.7,14.8C15.9,14.4 15,13.5 15,12C15,10.5 15.9,9.6 16.7,9.2M17.5,7C15.5,7 13,8.9 13,12C13,15.1 15.5,17 17.5,17C19.5,17 19.5,7 17.5,7M4.9,6.2L2.5,4.6L1.4,6.3L4,8C4.2,7.3 4.5,6.6 4.9,6.2M20,8L22.6,6.3L21.5,4.6L19.1,6.2C19.4,6.6 19.8,7.2 20,8M4,16L1.4,17.7L2.5,19.4L4.9,17.8C4.6,17.4 4.2,16.8 4,16M20.5,11C20.5,11.3 20.5,11.7 20.5,12C20.5,12.3 20.5,12.6 20.5,13H24V11H20.5M19.1,17.8L21.5,19.4L22.6,17.7L20,16C19.8,16.7 19.5,17.4 19.1,17.8M3.5,12C3.5,11.7 3.5,11.4 3.5,11H0V13H3.5C3.5,12.7 3.5,12.3 3.5,12Z"
  }));
};

CarParkingLightsIcon.displayName = 'CarParkingLightsIcon';
CarParkingLightsIcon.defaultProps = {
  size: 24
};
var _default = CarParkingLightsIcon;
exports["default"] = _default;