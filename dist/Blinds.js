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

var BlindsIcon = function BlindsIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,2H21C21.55,2 22,2.45 22,3V5C22,5.55 21.55,6 21,6H20V13C20,13.55 19.55,14 19,14H13V16.17C14.17,16.58 15,17.69 15,19C15,20.66 13.66,22 12,22C10.34,22 9,20.66 9,19C9,17.69 9.83,16.58 11,16.17V14H5C4.45,14 4,13.55 4,13V6H3C2.45,6 2,5.55 2,5V3C2,2.45 2.45,2 3,2M12,18C11.45,18 11,18.45 11,19C11,19.55 11.45,20 12,20C12.55,20 13,19.55 13,19C13,18.45 12.55,18 12,18Z"
  }));
};

BlindsIcon.displayName = 'BlindsIcon';
BlindsIcon.defaultProps = {
  size: 24
};
var _default = BlindsIcon;
exports["default"] = _default;