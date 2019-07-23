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

var CameraWirelessIcon = function CameraWirelessIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,10.8C13.77,10.8 15.2,12.23 15.2,14C15.2,15.77 13.77,17.2 12,17.2C10.23,17.2 8.8,15.77 8.8,14C8.8,12.23 10.23,10.8 12,10.8M16,3.33V2C19.31,2 22,4.69 22,8H20.67C20.67,5.42 18.58,3.33 16,3.33M16,6V4.67C17.84,4.67 19.33,6.16 19.33,8H18C18,6.89 17.11,6 16,6M17,9H22V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V8C2,6.9 2.9,6 4,6H7.17L9,4H15V7C16.11,7 17,7.89 17,9M12,19C14.76,19 17,16.76 17,14C17,11.24 14.76,9 12,9C9.24,9 7,11.24 7,14C7,16.76 9.24,19 12,19Z"
  }));
};

CameraWirelessIcon.displayName = 'CameraWirelessIcon';
CameraWirelessIcon.defaultProps = {
  size: 24
};
var _default = CameraWirelessIcon;
exports["default"] = _default;