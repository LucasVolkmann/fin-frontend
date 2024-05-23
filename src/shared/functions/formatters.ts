export const valueFormatter = (value: number | null) => {
  const replacePointValue = removeComma(String(value)).replace('.', ',');
  const commaIndex = replacePointValue.indexOf(',');
  if (commaIndex > 0) {
    return `R$ ${replacePointValue.slice(0, commaIndex + 3)}`;
  } else {
    return `R$ ${replacePointValue},00`;
  }
};

const removeComma = (value:string): string => {
  return value.replace(',', '');
};