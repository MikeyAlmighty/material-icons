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

var AndroidAutoIcon = function AndroidAutoIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M22.78,17.91C22.94,18.16 23,18.42 23,18.7C23,19.08 22.87,19.39 22.57,19.64C22.27,19.89 21.94,20 21.56,20H19.08L12.42,8H11.58L4.92,20H2.39C1.92,20 1.53,19.8 1.22,19.38C0.91,18.96 0.89,18.5 1.17,18L10.78,1.69C11.09,1.22 11.5,1 12,1C12.53,1 12.92,1.22 13.17,1.69L22.78,17.91M4.78,22.31L12,9.38L19.22,22.31L18.5,23L12,20.34L5.44,23L4.78,22.31Z"
  }));
};

AndroidAutoIcon.displayName = 'AndroidAutoIcon';
AndroidAutoIcon.defaultProps = {
  size: 24
};
var _default = AndroidAutoIcon;
exports["default"] = _default;