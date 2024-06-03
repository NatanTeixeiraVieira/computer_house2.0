import translate from 'translate';

export const translateText = async (text, langTo = '') => {
  const res = await translate(text, 'pt');
  return res;
};
