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

var CellphoneBasicIcon = function CellphoneBasicIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M15,2C14.45,2 14,2.45 14,3V6H10C8.89,6 8,6.89 8,8V20C8,21.11 8.89,22 10,22H15C16.11,22 17,21.11 17,20V8C17,7.26 16.6,6.62 16,6.28V3C16,2.45 15.55,2 15,2M10,8H15V13H10V8M10,15H11V16H10V15M12,15H13V16H12V15M14,15H15V16H14V15M10,17H11V18H10V17M12,17H13V18H12V17M14,17H15V18H14V17M10,19H11V20H10V19M12,19H13V20H12V19M14,19H15V20H14V19Z"
  }));
};

CellphoneBasicIcon.displayName = 'CellphoneBasicIcon';
CellphoneBasicIcon.defaultProps = {
  size: 24
};
var _default = CellphoneBasicIcon;
exports["default"] = _default;