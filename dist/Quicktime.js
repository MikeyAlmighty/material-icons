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

var QuicktimeIcon = function QuicktimeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,3C16.97,3 21,7.03 21,12C21,13.76 20.5,15.4 19.62,16.79L21,18.17V20C21,20.55 20.55,21 20,21H18.18L16.79,19.62C15.41,20.5 13.76,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C12.65,17 13.26,16.88 13.83,16.65L10.95,13.77C10.17,13 10.17,11.72 10.95,10.94C11.73,10.16 13,10.16 13.78,10.94L16.66,13.82C16.88,13.26 17,12.64 17,12C17,9.24 14.76,7 12,7Z"
  }));
};

QuicktimeIcon.displayName = 'QuicktimeIcon';
QuicktimeIcon.defaultProps = {
  size: 24
};
var _default = QuicktimeIcon;
exports["default"] = _default;