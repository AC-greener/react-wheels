"use strict";
exports.__esModule = true;
var react_test_renderer_1 = require("react-test-renderer");
var react_1 = require("react");
var button_1 = require("../button");
describe('button', function () {
    it('是个 div', function () {
        var json = react_test_renderer_1["default"].create(react_1["default"].createElement(button_1["default"], null)).toJSON();
        expect(json).toMatchSnapshot();
    });
});
