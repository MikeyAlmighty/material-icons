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

var FileHiddenIcon = function FileHiddenIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M13,9H14V11H11V7H13V9M18.5,9L16.38,6.88L17.63,5.63L20,8V10H18V11H15V9H18.5M13,3.5V2H12V4H13V6H11V4H9V2H8V4H6V5H4V4C4,2.89 4.89,2 6,2H14L16.36,4.36L15.11,5.61L13,3.5M20,20C20,21.1 19.1,22 18,22H16V20H18V19H20V20M18,15H20V18H18V15M12,22V20H15V22H12M8,22V20H11V22H8M6,22C4.89,22 4,21.1 4,20V18H6V20H7V22H6M4,14H6V17H4V14M4,10H6V13H4V10M18,11H20V14H18V11M4,6H6V9H4V6Z"
  }));
};

FileHiddenIcon.displayName = 'FileHiddenIcon';
FileHiddenIcon.defaultProps = {
  size: 24
};
var _default = FileHiddenIcon;
exports["default"] = _default;