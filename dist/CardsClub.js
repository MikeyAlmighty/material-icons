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

var CardsClubIcon = function CardsClubIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C14.3,2 16.3,4 16.3,6.2C16.21,8.77 14.34,9.83 14.04,10C15.04,9.5 16.5,9.5 16.5,9.5C19,9.5 21,11.3 21,13.8C21,16.3 19,18 16.5,18C16.5,18 15,18 13,17C13,17 12.7,19 15,22H9C11.3,19 11,17 11,17C9,18 7.5,18 7.5,18C5,18 3,16.3 3,13.8C3,11.3 5,9.5 7.5,9.5C7.5,9.5 8.96,9.5 9.96,10C9.66,9.83 7.79,8.77 7.7,6.2C7.7,4 9.7,2 12,2Z"
  }));
};

CardsClubIcon.displayName = 'CardsClubIcon';
CardsClubIcon.defaultProps = {
  size: 24
};
var _default = CardsClubIcon;
exports["default"] = _default;