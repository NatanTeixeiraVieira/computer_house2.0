export const formatCurrency = (value = 0) => {
  console.log('🚀 ~ formatCurrency ~ value:', value);
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const formatCurrencyToValue = (currency) => {
  const value = currency.replace('R$', '').trim().replace(',', '.');
  return +value;
};
