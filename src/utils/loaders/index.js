export const importResourceChain = async (lang) => {
  const enRes = await import('../locales/en_us');

  const result = Object.assign({}, enRes.default);
  return result;
};
