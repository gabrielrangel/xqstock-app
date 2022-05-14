export const getValuesAsArray = (value: [string, Record<string, string>][]) =>
  value.reduce((acc, [, timeseries]) => {
    Object.entries(timeseries).forEach(([symbol, value]) => {
      acc[symbol] = acc[symbol]
        ? [...acc[symbol], Number(value)]
        : [Number(value)];
    });

    const maxLength = Math.max(...Object.values(acc).map((v) => v.length));

    Object.values(acc)
      .filter((v) => v.length < maxLength)
      .map((v) => v.push(0));

    return acc;
  }, {} as Record<string, number[]>);

export default getValuesAsArray;
