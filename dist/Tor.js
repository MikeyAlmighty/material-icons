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

var TorIcon = function TorIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,14C11,14 9,15 9,16C9,18 12,18 12,18V17C11.45,17 11,16.55 11,16C11,15.45 11.45,15 12,15V14M12,19C12,19 8,18.5 8,16.5C8,13.5 11,12.75 12,12.75V11.5C11,11.5 7,13 7,16C7,20 12,20 12,20V19M10.07,7.03L11.26,7.56C11.69,5.12 12.84,3.5 12.84,3.5C12.41,4.53 12.13,5.38 11.95,6.05C13.16,3.55 15.61,2 15.61,2C14.43,3.18 13.56,4.46 12.97,5.53C14.55,3.85 16.74,2.75 16.74,2.75C14.05,4.47 12.84,7.2 12.54,7.96L13.09,8.04C13.09,8.56 13.09,9.04 13.34,9.42C14.1,11.31 18,11.47 18,16C18,20.53 13.97,22 11.83,22C9.69,22 5,21.03 5,16C5,10.97 9.95,10.93 10.83,8.92C10.95,8.54 10.07,7.03 10.07,7.03Z"
  }));
};

TorIcon.displayName = 'TorIcon';
TorIcon.defaultProps = {
  size: 24
};
var _default = TorIcon;
exports["default"] = _default;