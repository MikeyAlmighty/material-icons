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

var TrelloIcon = function TrelloIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19.5,2H4.5C3.12,2 2,3.12 2,4.5V19.5C2,20.88 3.12,22 4.5,22H19.5C20.88,22 22,20.88 22,19.5V4.5C22,3.12 20.88,2 19.5,2M10.7,17.2C10.7,17.86 10.16,18.4 9.5,18.4H5.8C5.14,18.4 4.6,17.86 4.6,17.2V5.8C4.6,5.14 5.14,4.6 5.8,4.6H9.5C10.16,4.6 10.7,5.14 10.7,5.8V17.2M19.4,12.2C19.4,12.86 18.86,13.4 18.2,13.4H14.5C13.84,13.4 13.3,12.86 13.3,12.2V5.8C13.3,5.14 13.84,4.6 14.5,4.6H18.2C18.86,4.6 19.4,5.14 19.4,5.8V12.2Z"
  }));
};

TrelloIcon.displayName = 'TrelloIcon';
TrelloIcon.defaultProps = {
  size: 24
};
var _default = TrelloIcon;
exports["default"] = _default;