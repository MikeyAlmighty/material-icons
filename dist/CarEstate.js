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

var CarEstateIcon = function CarEstateIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M3,6H16L19,10H21C22.11,10 23,10.89 23,12V15H21C21,16.66 19.66,18 18,18C16.34,18 15,16.66 15,15H9C9,16.66 7.66,18 6,18C4.34,18 3,16.66 3,15H1V8C1,6.89 1.89,6 3,6M2.5,7.5V10H10.5V7.5H2.5M12,7.5V10H17.14L15.25,7.5H12M6,13.5C5.17,13.5 4.5,14.17 4.5,15C4.5,15.83 5.17,16.5 6,16.5C6.83,16.5 7.5,15.83 7.5,15C7.5,14.17 6.83,13.5 6,13.5M18,13.5C17.17,13.5 16.5,14.17 16.5,15C16.5,15.83 17.17,16.5 18,16.5C18.83,16.5 19.5,15.83 19.5,15C19.5,14.17 18.83,13.5 18,13.5Z"
  }));
};

CarEstateIcon.displayName = 'CarEstateIcon';
CarEstateIcon.defaultProps = {
  size: 24
};
var _default = CarEstateIcon;
exports["default"] = _default;