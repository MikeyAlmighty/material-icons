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

var RadiatorDisabledIcon = function RadiatorDisabledIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,12H4C2.9,12 2,12.9 2,14V22H4V20H20V22H22V14C22,12.9 21.1,12 20,12M7,17C7,17.55 6.55,18 6,18C5.45,18 5,17.55 5,17V15C5,14.45 5.45,14 6,14C6.55,14 7,14.45 7,15V17M11,17C11,17.55 10.55,18 10,18C9.45,18 9,17.55 9,17V15C9,14.45 9.45,14 10,14C10.55,14 11,14.45 11,15V17M15,17C15,17.55 14.55,18 14,18C13.45,18 13,17.55 13,17V15C13,14.45 13.45,14 14,14C14.55,14 15,14.45 15,15V17M19,17C19,17.55 18.55,18 18,18C17.45,18 17,17.55 17,17V15C17,14.45 17.45,14 18,14C18.55,14 19,14.45 19,15V17Z"
  }));
};

RadiatorDisabledIcon.displayName = 'RadiatorDisabledIcon';
RadiatorDisabledIcon.defaultProps = {
  size: 24
};
var _default = RadiatorDisabledIcon;
exports["default"] = _default;