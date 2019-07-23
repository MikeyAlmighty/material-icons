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

var RobotIcon = function RobotIcon(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return _react["default"].createElement(Svg, _extends({}, props, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentcolor"
  }), _react["default"].createElement("path", {
    d: "M12,2C13.1,2 14,2.9 14,4C14,4.74 13.6,5.39 13,5.73V7H14C17.87,7 21,10.13 21,14H22C22.55,14 23,14.45 23,15V18C23,18.55 22.55,19 22,19H21V20C21,21.1 20.1,22 19,22H5C3.9,22 3,21.1 3,20V19H2C1.45,19 1,18.55 1,18V15C1,14.45 1.45,14 2,14H3C3,10.13 6.13,7 10,7H11V5.73C10.4,5.39 10,4.74 10,4C10,2.9 10.9,2 12,2M7.5,13C6.12,13 5,14.12 5,15.5C5,16.88 6.12,18 7.5,18C8.88,18 10,16.88 10,15.5C10,14.12 8.88,13 7.5,13M16.5,13C15.12,13 14,14.12 14,15.5C14,16.88 15.12,18 16.5,18C17.88,18 19,16.88 19,15.5C19,14.12 17.88,13 16.5,13Z"
  }));
};

RobotIcon.displayName = 'RobotIcon';
RobotIcon.defaultProps = {
  size: 24
};
var _default = RobotIcon;
exports["default"] = _default;