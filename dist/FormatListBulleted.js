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

var FormatListBulletedIcon = function FormatListBulletedIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5C4.83,4.5 5.5,5.17 5.5,6C5.5,6.83 4.83,7.5 4,7.5C3.17,7.5 2.5,6.83 2.5,6C2.5,5.17 3.17,4.5 4,4.5M4,10.5C4.83,10.5 5.5,11.17 5.5,12C5.5,12.83 4.83,13.5 4,13.5C3.17,13.5 2.5,12.83 2.5,12C2.5,11.17 3.17,10.5 4,10.5M7,19V17H21V19H7M4,16.5C4.83,16.5 5.5,17.17 5.5,18C5.5,18.83 4.83,19.5 4,19.5C3.17,19.5 2.5,18.83 2.5,18C2.5,17.17 3.17,16.5 4,16.5Z"
  }));
};

FormatListBulletedIcon.displayName = 'FormatListBulletedIcon';
FormatListBulletedIcon.defaultProps = {
  size: 24
};
var _default = FormatListBulletedIcon;
exports["default"] = _default;