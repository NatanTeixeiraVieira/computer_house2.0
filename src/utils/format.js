export const formatCurrency = (value) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const formatCurrencyToValue = (currency) => {
  console.log('🚀 ~ formatCurrencyToValue ~ currency:', currency);
  const value = currency.replace('R$', '').trim().replace(',', '.');
  return +value;
};
