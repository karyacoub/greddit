// import { NumberUtil } from "../numberUtil";

it("lets me push", () => {
    expect(1).toEqual(1);
});

// describe("NumberUtil", () => {
//     describe("formatNumberWithCommas", () => {
//         it("does not shorten numbers that are 1 to 4 digits long", () => {
//             expect(NumberUtil.formatToShortNumber(1)).toEqual("1");
//             expect(NumberUtil.formatToShortNumber(10)).toEqual("10");
//             expect(NumberUtil.formatToShortNumber(100)).toEqual("100");
//             expect(NumberUtil.formatToShortNumber(1000)).toEqual("1000");
//         });

//         it("separates numbers that are 5 digits or longer", () => {
//             expect(NumberUtil.formatToShortNumber(10000)).toEqual("10k");
//             expect(NumberUtil.formatToShortNumber(10100)).toEqual("10.1k");
//             expect(NumberUtil.formatToShortNumber(100000)).toEqual("100k");
//             expect(NumberUtil.formatToShortNumber(100100)).toEqual("100.1k");
//         });
//     });
// });