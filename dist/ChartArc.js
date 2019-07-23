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

var ChartArcIcon = function ChartArcIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16.18,19.6L14.17,16.12C15.15,15.4 15.83,14.28 15.97,13H20C19.83,15.76 18.35,18.16 16.18,19.6M13,7.03V3C17.3,3.26 20.74,6.7 21,11H16.97C16.74,8.91 15.09,7.26 13,7.03M7,12.5C7,13.14 7.13,13.75 7.38,14.3L3.9,16.31C3.32,15.16 3,13.87 3,12.5C3,7.97 6.54,4.27 11,4V8.03C8.75,8.28 7,10.18 7,12.5M11.5,21C8.53,21 5.92,19.5 4.4,17.18L7.88,15.17C8.7,16.28 10,17 11.5,17C12.14,17 12.75,16.87 13.3,16.62L15.31,20.1C14.16,20.68 12.87,21 11.5,21Z"
  }));
};

ChartArcIcon.displayName = 'ChartArcIcon';
ChartArcIcon.defaultProps = {
  size: 24
};
var _default = ChartArcIcon;
exports["default"] = _default;