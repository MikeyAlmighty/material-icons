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

var VectorDifferenceBaIcon = function VectorDifferenceBaIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M20,22C21.11,22 22,21.11 22,20V18H20V20H18V22H20M16,22V20H13V22H16M11,22V20H9V18H7V20C7,21.11 7.89,22 9,22H11M22,16V13H20V16H22M9,16C9,16 9,11.33 9,9C11.33,9 16,9 16,9C16,9 16,5 16,3C16,1.89 15.11,1 14,1H3C1.89,1 1,1.89 1,3V14C1,15.11 1.89,16 3,16C5,16 9,16 9,16M7,14H3V3H14V7H9C7.89,7 7,7.89 7,9V14M22,11V9C22,7.89 21.11,7 20,7H18V9H20V11H22Z"
  }));
};

VectorDifferenceBaIcon.displayName = 'VectorDifferenceBaIcon';
VectorDifferenceBaIcon.defaultProps = {
  size: 24
};
var _default = VectorDifferenceBaIcon;
exports["default"] = _default;