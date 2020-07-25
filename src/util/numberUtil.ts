export class NumberUtil {
    public static formatNumberWithCommas(num: number): string {
        const digits = num.toString().split("");

        return digits.length > 3
            ? digits.reduceRight((acc: string, digit: string, index) => {
                const accWithoutCommas = digits.slice(index, digits.length - 1);

                if (accWithoutCommas.length > 0 && accWithoutCommas.length % 3 === 0) {
                    return `${digit},${acc}`;
                } else {
                    return `${digit}${acc}`;
                }
            }, "")
            : num.toString();
    }

    public static formatToShortNumber(num: number): string {
        const digits = num.toString().split("");

        const prefix = digits.length > 3
            ? (num / 1000).toFixed(1).toString()
            : num.toString();

        const suffix = digits.length > 3
            ? "k"
            : "";

        return `${prefix}${suffix}`;
    }
}