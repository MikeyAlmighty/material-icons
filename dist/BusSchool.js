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

var BusSchoolIcon = function BusSchoolIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,6C1.89,6 1,6.89 1,8V15H3C3,16.66 4.34,18 6,18C7.66,18 9,16.66 9,15H15C15,16.66 16.34,18 18,18C19.66,18 21,16.66 21,15H23V12C23,10.89 22.11,10 21,10H19V8C19,6.89 18.11,6 17,6H3M13.5,7.5H17.5V10H13.5V7.5M2.5,7.5H6.5V10H2.5V7.5M8,7.5H12V10H8V7.5M6,13.5C6.83,13.5 7.5,14.17 7.5,15C7.5,15.83 6.83,16.5 6,16.5C5.17,16.5 4.5,15.83 4.5,15C4.5,14.17 5.17,13.5 6,13.5M18,13.5C18.83,13.5 19.5,14.17 19.5,15C19.5,15.83 18.83,16.5 18,16.5C17.17,16.5 16.5,15.83 16.5,15C16.5,14.17 17.17,13.5 18,13.5Z"
  }));
};

BusSchoolIcon.displayName = 'BusSchoolIcon';
BusSchoolIcon.defaultProps = {
  size: 24
};
var _default = BusSchoolIcon;
exports["default"] = _default;