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

var DiameterVariantIcon = function DiameterVariantIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M4.15,21.46L5.47,19.58C3.35,17.74 2,15.03 2,12C2,6.48 6.48,2 12,2C13.78,2 15.44,2.46 16.89,3.27L18.21,1.39L19.85,2.54L18.53,4.42C20.65,6.26 22,8.97 22,12C22,17.52 17.52,22 12,22C10.22,22 8.56,21.54 7.11,20.73L5.79,22.61L4.15,21.46M12,4C7.58,4 4,7.58 4,12C4,14.35 5,16.46 6.63,17.93L15.73,4.92C14.62,4.33 13.35,4 12,4M12,20C16.42,20 20,16.42 20,12C20,9.65 19,7.54 17.37,6.07L8.27,19.08C9.38,19.67 10.65,20 12,20Z"
  }));
};

DiameterVariantIcon.displayName = 'DiameterVariantIcon';
DiameterVariantIcon.defaultProps = {
  size: 24
};
var _default = DiameterVariantIcon;
exports["default"] = _default;