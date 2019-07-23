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

var VectorSelectionIcon = function VectorSelectionIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,1H5V3H3V5H1V3C1,1.9 1.9,1 3,1M14,1C15.1,1 16,1.9 16,3V5H14V3H12V1H14M20,7C21.1,7 22,7.9 22,9V11H20V9H18V7H20M22,20C22,21.1 21.1,22 20,22H18V20H20V18H22V20M20,13H22V16H20V13M13,9V7H16V10H14V9H13M13,22V20H16V22H13M9,22C7.9,22 7,21.1 7,20V18H9V20H11V22H9M7,16V13H9V14H10V16H7M7,3V1H10V3H7M3,16C1.9,16 1,15.1 1,14V12H3V14H5V16H3M1,7H3V10H1V7M9,7H11V9H9V11H7V9C7,7.9 7.9,7 9,7M16,14C16,15.1 15.1,16 14,16H12V14H14V12H16V14Z"
  }));
};

VectorSelectionIcon.displayName = 'VectorSelectionIcon';
VectorSelectionIcon.defaultProps = {
  size: 24
};
var _default = VectorSelectionIcon;
exports["default"] = _default;