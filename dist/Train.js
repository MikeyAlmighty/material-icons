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

var TrainIcon = function TrainIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C8,2 4,2.5 4,6V15.5C4,17.43 5.57,19 7.5,19L6,20.5V21H8.23L10.23,19H14L16,21H18V20.5L16.5,19C18.43,19 20,17.43 20,15.5V6C20,2.5 16.42,2 12,2M7.5,17C6.67,17 6,16.33 6,15.5C6,14.67 6.67,14 7.5,14C8.33,14 9,14.67 9,15.5C9,16.33 8.33,17 7.5,17M11,10H6V6H11V10M13,10V6H18V10H13M16.5,17C15.67,17 15,16.33 15,15.5C15,14.67 15.67,14 16.5,14C17.33,14 18,14.67 18,15.5C18,16.33 17.33,17 16.5,17Z"
  }));
};

TrainIcon.displayName = 'TrainIcon';
TrainIcon.defaultProps = {
  size: 24
};
var _default = TrainIcon;
exports["default"] = _default;