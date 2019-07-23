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

var ScissorsCuttingIcon = function ScissorsCuttingIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M11,21H7V19H11V21M15.5,19H17V21H13V19H13.2L11.8,12.9L9.3,13.5C9.2,14 9,14.4 8.8,14.8C7.9,16.3 6,16.7 4.5,15.8C3,14.9 2.6,13 3.5,11.5C4.4,10 6.3,9.6 7.8,10.5C8.2,10.7 8.5,11.1 8.7,11.4L11.2,10.8L10.6,8.3C10.2,8.2 9.8,8 9.4,7.8C8,6.9 7.5,5 8.4,3.5C9.3,2 11.2,1.6 12.7,2.5C14.2,3.4 14.6,5.3 13.7,6.8C13.5,7.2 13.1,7.5 12.8,7.7L15.5,19M7,11.8C6.3,11.3 5.3,11.6 4.8,12.3C4.3,13 4.6,14 5.3,14.4C6,14.9 7,14.7 7.5,13.9C7.9,13.2 7.7,12.2 7,11.8M12.4,6C12.9,5.3 12.6,4.3 11.9,3.8C11.2,3.3 10.2,3.6 9.7,4.3C9.3,5 9.5,6 10.3,6.5C11,6.9 12,6.7 12.4,6M12.8,11.3C12.6,11.2 12.4,11.2 12.3,11.4C12.2,11.6 12.2,11.8 12.4,11.9C12.6,12 12.8,12 12.9,11.8C13.1,11.6 13,11.4 12.8,11.3M21,8.5L14.5,10L15,12.2L22.5,10.4L23,9.7L21,8.5M23,19H19V21H23V19M5,19H1V21H5V19Z"
  }));
};

ScissorsCuttingIcon.displayName = 'ScissorsCuttingIcon';
ScissorsCuttingIcon.defaultProps = {
  size: 24
};
var _default = ScissorsCuttingIcon;
exports["default"] = _default;