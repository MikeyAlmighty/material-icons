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

var RacquetballIcon = function RacquetballIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.5,16C19.9,16 21,17.1 21,18.5C21,19.9 19.9,21 18.5,21C17.1,21 16,19.9 16,18.5C16,17.1 17.1,16 18.5,16M10.5,1C3,1 3,3.7 3,9.8C3,13.2 6.4,16.9 9,18.1V23H12V18.1C14.6,16.9 18,13.2 18,9.8C18,3.6 18,1 10.5,1M15.4,4.2C15.7,4.6 15.8,5.2 15.9,6H15V3.8C15.2,3.9 15.3,4.1 15.4,4.2M16,9.8C16,9.9 16,10 16,10H15V7H16C16,7.8 16,8.7 16,9.8M14,14H11V11H14V14M7,14V11H10V14H7M5,9.8C5,8.8 5,7.9 5,7H6V10H5C5,9.9 5,9.8 5,9.8M7,7H10V10H7V7M11,3C12.4,3 13.4,3.2 14,3.3V6H11V3M10,6H7V3.4C7.6,3.2 8.6,3 10,3V6M11,10V7H14V10H11M6,3.8V6H5.1C5.2,5.2 5.3,4.6 5.6,4.2C5.7,4.1 5.8,4 6,3.8M5.2,11H6V12.7C5.7,12.1 5.4,11.6 5.2,11M8,15H10V16.3L9.8,16.2C9.2,16 8.6,15.5 8,15M11.2,16.3H11V15H13C12.4,15.5 11.8,16 11.2,16.3M15,12.7V11H15.8C15.6,11.5 15.3,12.1 15,12.7Z"
  }));
};

RacquetballIcon.displayName = 'RacquetballIcon';
RacquetballIcon.defaultProps = {
  size: 24
};
var _default = RacquetballIcon;
exports["default"] = _default;