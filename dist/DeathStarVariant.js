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

var DeathStarVariantIcon = function DeathStarVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2.05,13H21.94C21.88,13.69 21.74,14.36 21.54,15H14V17H17V19H15V21H12.5V22C12.33,22 12.17,22 12,22C6.82,22 2.55,18.05 2.05,13M21.94,11H2.05C2.55,5.95 6.82,2 12,2C13.62,2 15.15,2.39 16.5,3.08V5H18.5V7H20V9H21.54C21.74,9.64 21.88,10.31 21.94,11M12,6.75C12,5.37 10.88,4.25 9.5,4.25C8.12,4.25 7,5.37 7,6.75C7,8.13 8.12,9.25 9.5,9.25C10.88,9.25 12,8.13 12,6.75Z"
  }));
};

DeathStarVariantIcon.displayName = 'DeathStarVariantIcon';
DeathStarVariantIcon.defaultProps = {
  size: 24
};
var _default = DeathStarVariantIcon;
exports["default"] = _default;