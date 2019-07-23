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

var ServerNetworkOffIcon = function ServerNetworkOffIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13,19H14C14.55,19 15,19.45 15,20H15.73L13,17.27V19M22,20V21.18L20.82,20H22M21,22.72L19.73,24L17.73,22H15C15,22.55 14.55,23 14,23H10C9.45,23 9,22.55 9,22H2V20H9C9,19.45 9.45,19 10,19H11V17H4C3.45,17 3,16.55 3,16V12C3,11.45 3.45,11 4,11H6.73L4.73,9H4C3.45,9 3,8.55 3,8V7.27L1,5.27L2.28,4L21,22.72M4,3H20C20.55,3 21,3.45 21,4V8C21,8.55 20.55,9 20,9H9.82L7,6.18V5H5.82L3.84,3C3.89,3 3.94,3 4,3M20,11C20.55,11 21,11.45 21,12V16C21,16.55 20.55,17 20,17H17.82L11.82,11H20M9,7H10V5H9V7M9,15H10V14.27L9,13.27V15M5,13V15H7V13H5Z"
  }));
};

ServerNetworkOffIcon.displayName = 'ServerNetworkOffIcon';
ServerNetworkOffIcon.defaultProps = {
  size: 24
};
var _default = ServerNetworkOffIcon;
exports["default"] = _default;