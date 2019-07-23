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

var FreebsdIcon = function FreebsdIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M2.69,2C3.54,1.95 6.08,3.16 6.13,3.19C4.84,4 3.74,5.09 2.91,6.38C2.09,4.81 1.34,2.91 2,2.25C2.17,2.08 2.4,2 2.69,2M20.84,2.13C21.25,2.08 21.58,2.14 21.78,2.34C22.85,3.42 19.88,8.15 19.38,8.66C18.87,9.16 17.57,8.7 16.5,7.63C15.43,6.55 14.97,5.26 15.47,4.75C15.88,4.34 19.09,2.3 20.84,2.13M12,2.56C13.29,2.56 14.53,2.82 15.66,3.28C15.17,3.6 14.81,3.85 14.69,3.97C13.7,4.96 14.14,6.83 15.72,8.41C16.7,9.38 17.84,9.97 18.78,9.97C19.46,9.97 19.92,9.68 20.16,9.44C20.33,9.27 20.6,8.88 20.91,8.41C21.42,9.59 21.69,10.88 21.69,12.25C21.69,17.61 17.36,21.97 12,21.97C6.64,21.97 2.31,17.61 2.31,12.25C2.31,6.89 6.64,2.56 12,2.56Z"
  }));
};

FreebsdIcon.displayName = 'FreebsdIcon';
FreebsdIcon.defaultProps = {
  size: 24
};
var _default = FreebsdIcon;
exports["default"] = _default;