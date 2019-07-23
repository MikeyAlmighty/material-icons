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

var FlowerPoppyIcon = function FlowerPoppyIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18.5,12C20.43,12 22,10.43 22,8.5C22,4.91 19.09,2 15.5,2C13.57,2 12,3.57 12,5.5C12,3.57 10.43,2 8.5,2C4.91,2 2,4.91 2,8.5C2,10.43 3.57,12 5.5,12C3.57,12 2,13.57 2,15.5C2,19.09 4.91,22 8.5,22C10.43,22 12,20.43 12,18.5C12,20.43 13.57,22 15.5,22C19.09,22 22,19.09 22,15.5C22,13.57 20.43,12 18.5,12M12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8C14.21,8 16,9.79 16,12C16,14.21 14.21,16 12,16M14.5,12C14.5,13.38 13.38,14.5 12,14.5C10.62,14.5 9.5,13.38 9.5,12C9.5,10.62 10.62,9.5 12,9.5C13.38,9.5 14.5,10.62 14.5,12Z"
  }));
};

FlowerPoppyIcon.displayName = 'FlowerPoppyIcon';
FlowerPoppyIcon.defaultProps = {
  size: 24
};
var _default = FlowerPoppyIcon;
exports["default"] = _default;