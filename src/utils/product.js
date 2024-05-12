export const generateDiscount = (value) => {
  const discountFiftyPercent = 0.5;
  const minDisountInPercentage = 0.5;
  const discount =
    value * Math.random() * discountFiftyPercent + minDisountInPercentage;
  const valueWithDiscount = value - discount;

  return valueWithDiscount.toFixed(2);
};
