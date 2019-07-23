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

var HeartMultipleOutlineIcon = function HeartMultipleOutlineIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,21.1L10.5,22.4C3.9,16.5 0.5,13.4 0.5,9.6C0.5,8.4 0.9,7.3 1.5,6.4C1.5,6.6 1.5,6.8 1.5,7C1.5,11.7 5.4,15.2 12,21.1M13.6,17C18.3,12.7 21.5,9.9 21.6,7C21.6,5 20.1,3.5 18.1,3.5C16.5,3.5 15,4.5 14.5,5.9H12.6C12,4.5 10.5,3.5 9,3.5C7,3.5 5.5,5 5.5,7C5.5,9.9 8.6,12.7 13.4,17L13.5,17.1M18,1.5C21.1,1.5 23.5,3.9 23.5,7C23.5,10.7 20.1,13.8 13.5,19.8C6.9,13.9 3.5,10.8 3.5,7C3.5,3.9 5.9,1.5 9,1.5C10.7,1.5 12.4,2.3 13.5,3.6C14.6,2.3 16.3,1.5 18,1.5Z"
  }));
};

HeartMultipleOutlineIcon.displayName = 'HeartMultipleOutlineIcon';
HeartMultipleOutlineIcon.defaultProps = {
  size: 24
};
var _default = HeartMultipleOutlineIcon;
exports["default"] = _default;