/**
 * Created by ac-jlima on 4/12/16.
 */
describe("getNthElement", function() {
    it("should be defined", function() {
        expect(window.getNthElement).toBeDefined();
    });

    it("should return the nth element", function() {
        var result = getNthElement([1, 2, 3], 0);
        expect(result).toEqual(1);
    });

    it("should return the nth from last element when passed a negative value", function() {
        var result = getNthElement([1, 2, 3], -1);
        expect(result).toEqual(3);
    });

});
