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

var QualityMediumIcon = function QualityMediumIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M21,6V18C21,19.1 20.1,20 19,20H5C3.9,20 3,19.1 3,18V6C3,4.9 3.9,4 5,4H19C20.1,4 21,4.9 21,6M12,10C12,9.5 11.5,9 11,9H6.5C6,9 5.5,9.5 5.5,10V15H7V10.5H8V14H9.5V10.5H10.5V15H12V10M14.5,9C13.95,9 13.5,9.45 13.5,10V14C13.5,14.55 13.95,15 14.5,15H15.5V16.5H16.75V15H17.5C18.05,15 18.5,14.55 18.5,14V10C18.5,9.45 18.05,9 17.5,9H14.5M15,10.5H17V13.5H15V10.5Z"
  }));
};

QualityMediumIcon.displayName = 'QualityMediumIcon';
QualityMediumIcon.defaultProps = {
  size: 24
};
var _default = QualityMediumIcon;
exports["default"] = _default;