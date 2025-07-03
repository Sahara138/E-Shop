export const GetDiscountPrice = (price, discount) => {
    return price - (price * discount) / 100;
};