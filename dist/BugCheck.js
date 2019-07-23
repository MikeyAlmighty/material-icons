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

var BugCheckIcon = function BugCheckIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M18,7H15.19C14.74,6.2 14.12,5.5 13.37,5L15,3.41L13.59,2L11.42,4.17C10.96,4.06 10.5,4 10,4C9.5,4 9.05,4.06 8.59,4.17L6.41,2L5,3.41L6.62,5C5.87,5.5 5.26,6.21 4.81,7H2V9H4.09C4.03,9.33 4,9.66 4,10V11H2V13H4V14C4,14.34 4.03,14.67 4.09,15H2V17H4.81C6.26,19.5 9.28,20.61 12,19.65C12,19.43 12,19.22 12,19C12,16.46 13.61,14.2 16,13.35V13H18V11H16V10C16,9.66 15.97,9.33 15.91,9H18V7M12,15H8V13H12V15M12,11H8V9H12V11M17.75,22.16L15,19.16L16.16,18L17.75,19.59L21.34,16L22.5,17.41L17.75,22.16Z"
  }));
};

BugCheckIcon.displayName = 'BugCheckIcon';
BugCheckIcon.defaultProps = {
  size: 24
};
var _default = BugCheckIcon;
exports["default"] = _default;