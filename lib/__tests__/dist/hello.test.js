function add(a, b) {
    return a + b;
}
describe('我的第一个测试用例', function () {
    it('add(1,2) 等于3', function () {
        expect(add(1, 2)).toEqual(3);
    });
});
