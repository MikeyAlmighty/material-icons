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

var SubwayAlertVariantIcon = function SubwayAlertVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M16,11V6H11V11H16M14.5,17C15.33,17 16,16.33 16,15.5C16,14.67 15.33,14 14.5,14C13.67,14 13,14.67 13,15.5C13,16.33 13.67,17 14.5,17M9,11V6H4V11H9M5.5,17C6.33,17 7,16.33 7,15.5C7,14.67 6.33,14 5.5,14C4.67,14 4,14.67 4,15.5C4,16.33 4.67,17 5.5,17M10,2C14.42,2 18,2.5 18,6V15.5C18,17.43 16.43,19 14.5,19L16,20.5V21H4V20.5L5.5,19C3.57,19 2,17.43 2,15.5V6C2,2.5 5.58,2 10,2M20,12V7H22V12H20M20,16V14H22V16H20Z"
  }));
};

SubwayAlertVariantIcon.displayName = 'SubwayAlertVariantIcon';
SubwayAlertVariantIcon.defaultProps = {
  size: 24
};
var _default = SubwayAlertVariantIcon;
exports["default"] = _default;