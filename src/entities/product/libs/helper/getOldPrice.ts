export const getOldPrice = (price: number, discount: number): number | null => {
    if (discount > 0) {
        return Math.round(price / (1 - discount / 100));
    }
    return null;
};
