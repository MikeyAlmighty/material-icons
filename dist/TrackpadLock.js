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

var TrackpadLockIcon = function TrackpadLockIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,1C1.89,1 1,1.89 1,3V17C1,18.11 1.89,19 3,19H14V17H12V13H16.68C17.5,12.35 18.47,12 19.5,12C20,12 20.5,12.09 21,12.26V3C21,1.89 20.11,1 19,1H3M3,3H19V11H3V3M3,13H10V17H3V13M19.5,14C18.12,14 17,15.12 17,16.5V17C16.45,17 16,17.45 16,18V22C16,22.55 16.45,23 17,23H22C22.55,23 23,22.55 23,22V18C23,17.45 22.55,17 22,17V16.5C22,15.12 20.88,14 19.5,14M19.5,15C20.33,15 21,15.67 21,16.5V17H18V16.5C18,15.67 18.67,15 19.5,15Z"
  }));
};

TrackpadLockIcon.displayName = 'TrackpadLockIcon';
TrackpadLockIcon.defaultProps = {
  size: 24
};
var _default = TrackpadLockIcon;
exports["default"] = _default;