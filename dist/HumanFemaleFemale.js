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

var HumanFemaleFemaleIcon = function HumanFemaleFemaleIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7.5,2C8.6,2 9.5,2.9 9.5,4C9.5,5.1 8.6,6 7.5,6C6.4,6 5.5,5.1 5.5,4C5.5,2.9 6.4,2 7.5,2M6,22V16H3L5.6,8.4C5.9,7.6 6.6,7 7.5,7C8.4,7 9.2,7.6 9.4,8.4L12,16L14.6,8.4C14.9,7.6 15.6,7 16.5,7C17.4,7 18.2,7.6 18.4,8.4L21,16H18V22H15V16H12L9,16V22H6M16.5,2C17.6,2 18.5,2.9 18.5,4C18.5,5.1 17.6,6 16.5,6C15.4,6 14.5,5.1 14.5,4C14.5,2.9 15.4,2 16.5,2Z"
  }));
};

HumanFemaleFemaleIcon.displayName = 'HumanFemaleFemaleIcon';
HumanFemaleFemaleIcon.defaultProps = {
  size: 24
};
var _default = HumanFemaleFemaleIcon;
exports["default"] = _default;