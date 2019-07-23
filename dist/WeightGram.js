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

var WeightGramIcon = function WeightGramIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M19.95,10.56C19.75,9.67 18.95,9 18,9H15.46C15.81,8.41 16,7.73 16,7C16,4.79 14.21,3 12,3C9.79,3 8,4.79 8,7C8,7.73 8.19,8.41 8.54,9H6C5.05,9 4.25,9.67 4.05,10.56C2.04,18.57 2,18.78 2,19C2,20.1 2.9,21 4,21H20C21.1,21 22,20.1 22,19C22,18.78 21.96,18.57 19.95,10.56M12,5C13.1,5 14,5.9 14,7C14,8.1 13.1,9 12,9C10.9,9 10,8.1 10,7C10,5.9 10.9,5 12,5M15,13H11V17H13V14H15V19H11C9.89,19 9,18.11 9,17V13C9,11.89 9.89,11 11,11H15V13Z"
  }));
};

WeightGramIcon.displayName = 'WeightGramIcon';
WeightGramIcon.defaultProps = {
  size: 24
};
var _default = WeightGramIcon;
exports["default"] = _default;