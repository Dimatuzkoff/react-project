export const isNewProduct = (createdAt: string): boolean => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffInDays =
        (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);
    return diffInDays <= 30;
};
