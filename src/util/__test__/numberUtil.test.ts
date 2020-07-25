import { NumberUtil } from "../numberUtil";

it("lets me push", () => {
    expect(1).toEqual(1);
});

describe("NumberUtil", () => {
    describe("formatToShortNumber", () => {
        it("does not shorten numbers that are 1 to 3 digits long", () => {
            expect(NumberUtil.formatToShortNumber(1)).toEqual("1");
            expect(NumberUtil.formatToShortNumber(10)).toEqual("10");
            expect(NumberUtil.formatToShortNumber(100)).toEqual("100");
        });

        it("separates numbers that are 5 digits or longer", () => {
            expect(NumberUtil.formatToShortNumber(1000)).toEqual("1.0k");
            expect(NumberUtil.formatToShortNumber(10000)).toEqual("10.0k");
            expect(NumberUtil.formatToShortNumber(11000)).toEqual("11.0k");
            expect(NumberUtil.formatToShortNumber(100000)).toEqual("100.0k");
            expect(NumberUtil.formatToShortNumber(101000)).toEqual("101.0k");
        });
    });

    describe("formatNumberWithCommas", () => {
        it("formats a number with more than 3 digits with commas", () => {
            expect(NumberUtil.formatNumberWithCommas(1)).toEqual("1");
            expect(NumberUtil.formatNumberWithCommas(10)).toEqual("10");
            expect(NumberUtil.formatNumberWithCommas(100)).toEqual("100");
            expect(NumberUtil.formatNumberWithCommas(1000)).toEqual("1,000");
            expect(NumberUtil.formatNumberWithCommas(10000)).toEqual("10,000");
            expect(NumberUtil.formatNumberWithCommas(100000)).toEqual("100,000");
        });
    });
});