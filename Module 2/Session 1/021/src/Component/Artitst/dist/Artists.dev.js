"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _data = _interopRequireDefault(require("../../data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Artists() {
  var artists = _data["default"];
  return artists.name;
}

var _default = Artists;
exports["default"] = _default;