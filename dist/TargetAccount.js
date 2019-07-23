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

var TargetAccountIcon = function TargetAccountIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20.95,11H22.5V13H20.95C20.5,17.17 17.17,20.5 13,20.95V22.5H11V20.95C6.83,20.5 3.5,17.17 3.05,13H1.5V11H3.05C3.5,6.83 6.83,3.5 11,3.05V1.5H13V3.05C17.17,3.5 20.5,6.83 20.95,11M5.07,11H6.5V13H5.07C5.5,16.07 7.93,18.5 11,18.93V17.5H13V18.93C16.07,18.5 18.5,16.07 18.93,13H17.5V11H18.93C18.5,7.93 16.07,5.5 13,5.07V6.5H11V5.07C7.93,5.5 5.5,7.93 5.07,11M16,16H8V15C8,13.67 10.67,13 12,13C13.33,13 16,13.67 16,15V16M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8Z"
  }));
};

TargetAccountIcon.displayName = 'TargetAccountIcon';
TargetAccountIcon.defaultProps = {
  size: 24
};
var _default = TargetAccountIcon;
exports["default"] = _default;