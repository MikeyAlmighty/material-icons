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

var NukeIcon = function NukeIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M14.04,12H10V11H5.5C3.57,11 2,9.43 2,7.5C2,5.57 3.57,4 5.5,4C6.53,4 7.45,4.44 8.09,5.15C8.5,3.35 10.08,2 12,2C13.92,2 15.5,3.35 15.91,5.15C16.55,4.44 17.47,4 18.5,4C20.43,4 22,5.57 22,7.5C22,9.43 20.43,11 18.5,11H14.04V12M10,16.9V15.76H5V13.76H19V15.76H14.04V16.92L20,19.08C20.58,19.29 21,19.84 21,20.5C21,21.33 20.33,22 19.5,22H4.5C3.67,22 3,21.33 3,20.5C3,19.84 3.42,19.29 4,19.08L10,16.9Z"
  }));
};

NukeIcon.displayName = 'NukeIcon';
NukeIcon.defaultProps = {
  size: 24
};
var _default = NukeIcon;
exports["default"] = _default;