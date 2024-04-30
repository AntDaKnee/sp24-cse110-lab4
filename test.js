function discountPrices(prices, discount) {
    const discount = [];
    const length = prices.length;

    for(let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1-discount);
        discount.push(discountPrices);
    }

    return discount;
}

discountPrices([100, 200, 300], 0.5);