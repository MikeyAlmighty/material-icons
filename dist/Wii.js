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

var WiiIcon = function WiiIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M17.84,16.94H15.97V10.79H17.84V16.94M18,8.58C18,9.19 17.5,9.69 16.9,9.69C16.29,9.69 15.79,9.19 15.79,8.58C15.79,7.96 16.29,7.46 16.9,7.46C17.5,7.46 18,7.96 18,8.58M21.82,16.94H19.94V10.79H21.82V16.94M22,8.58C22,9.19 21.5,9.69 20.88,9.69C20.27,9.69 19.77,9.19 19.77,8.58C19.77,7.96 20.27,7.46 20.88,7.46C21.5,7.46 22,7.96 22,8.58M12.9,8.05H14.9L12.78,15.5C12.78,15.5 12.5,17.04 11.28,17.04C10.07,17.04 9.79,15.5 9.79,15.5L8.45,10.64L7.11,15.5C7.11,15.5 6.82,17.04 5.61,17.04C4.4,17.04 4.12,15.5 4.12,15.5L2,8.05H4L5.72,14.67L7.11,9.3C7.43,7.95 8.45,7.97 8.45,7.97C8.45,7.97 9.47,7.95 9.79,9.3L11.17,14.67L12.9,8.05Z"
  }));
};

WiiIcon.displayName = 'WiiIcon';
WiiIcon.defaultProps = {
  size: 24
};
var _default = WiiIcon;
exports["default"] = _default;