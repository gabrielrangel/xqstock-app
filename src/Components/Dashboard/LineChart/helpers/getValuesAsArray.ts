export const getValuesAsArray = (
  value: Record<string, Record<string, string>>
) =>
  Object.entries(value)
    .sort(([date]) => new Date(date).getTime())
    .reduce((acc, [, timeseries]) => {
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
