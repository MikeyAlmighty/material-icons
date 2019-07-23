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

var SpeakerOffIcon = function SpeakerOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2,5.27L3.28,4L21,21.72L19.73,23L18.27,21.54C17.93,21.83 17.5,22 17,22H7C5.89,22 5,21.1 5,20V8.27L2,5.27M12,18C10.34,18 9,16.66 9,15C9,14.24 9.28,13.54 9.75,13L8.33,11.6C7.5,12.5 7,13.69 7,15C7,17.76 9.24,20 12,20C13.31,20 14.5,19.5 15.4,18.67L14,17.25C13.45,17.72 12.76,18 12,18M17,15C17,12.24 14.76,10 12,10H11.82L5.12,3.3C5.41,2.54 6.14,2 7,2H17C18.1,2 19,2.9 19,4V17.18L17,15.17V15M12,4C10.89,4 10,4.89 10,6C10,7.1 10.9,8 12,8C13.1,8 14,7.1 14,6C14,4.89 13.1,4 12,4Z"
  }));
};

SpeakerOffIcon.displayName = 'SpeakerOffIcon';
SpeakerOffIcon.defaultProps = {
  size: 24
};
var _default = SpeakerOffIcon;
exports["default"] = _default;