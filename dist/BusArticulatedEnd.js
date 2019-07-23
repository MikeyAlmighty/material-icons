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

var BusArticulatedEndIcon = function BusArticulatedEndIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21.5,6L20,7.5L21.5,9L20,10.5L21.5,12L20,13.5L21.5,15H12.5C12.5,16.66 11.16,18 9.5,18C7.84,18 6.5,16.66 6.5,15H2.5V8C2.5,6.89 3.39,6 4.5,6H21.5M18.5,7.5H15V10H18.5V7.5M13.5,7.5H9.5V10H13.5V7.5M8,7.5H4V10H8V7.5M9.5,13.5C8.67,13.5 8,14.17 8,15C8,15.83 8.67,16.5 9.5,16.5C10.33,16.5 11,15.83 11,15C11,14.17 10.33,13.5 9.5,13.5Z"
  }));
};

BusArticulatedEndIcon.displayName = 'BusArticulatedEndIcon';
BusArticulatedEndIcon.defaultProps = {
  size: 24
};
var _default = BusArticulatedEndIcon;
exports["default"] = _default;