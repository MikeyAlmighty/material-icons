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

var HeadphonesOffIcon = function HeadphonesOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,1C16.97,1 21,5.03 21,10V17C21,17.62 20.81,18.19 20.5,18.67L15,13.18V12H19V10C19,6.13 15.87,3 12,3C10,3 8.23,3.82 6.96,5.14L5.55,3.72C7.18,2.04 9.47,1 12,1M2.78,3.5L20.5,21.22L19.23,22.5L16.73,20H15V18.27L9,12.27V20H6C4.34,20 3,18.66 3,17V10C3,8.89 3.2,7.82 3.57,6.84L1.5,4.77L2.78,3.5M5.17,8.44C5.06,8.94 5,9.46 5,10V12H8.73L5.17,8.44Z"
  }));
};

HeadphonesOffIcon.displayName = 'HeadphonesOffIcon';
HeadphonesOffIcon.defaultProps = {
  size: 24
};
var _default = HeadphonesOffIcon;
exports["default"] = _default;