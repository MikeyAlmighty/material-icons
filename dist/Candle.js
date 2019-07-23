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

var CandleIcon = function CandleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12.5,2C10.84,2 9.5,5.34 9.5,7C9.5,8.66 10.84,10 12.5,10C14.16,10 15.5,8.66 15.5,7C15.5,5.34 14.16,2 12.5,2M12.5,6.5C13.05,6.5 13.5,6.95 13.5,7.5C13.5,8.05 13.05,8.5 12.5,8.5C11.95,8.5 11.5,8.05 11.5,7.5C11.5,6.95 11.95,6.5 12.5,6.5M10,11C9.45,11 9,11.45 9,12V20H7C6.45,20 6,19.55 6,19V18C6,17.45 5.55,17 5,17C4.45,17 4,17.45 4,18V19C4,20.66 5.34,22 7,22H19C19.55,22 20,21.55 20,21C20,20.45 19.55,20 19,20H16V12C16,11.45 15.55,11 15,11H10Z"
  }));
};

CandleIcon.displayName = 'CandleIcon';
CandleIcon.defaultProps = {
  size: 24
};
var _default = CandleIcon;
exports["default"] = _default;