export async function getAssets(symbol: string) {
  const activeList = [
    { symbol: "MGLU3", lastPrice: 4.88, variation: -5.79 },
    { symbol: "PETR4", lastPrice: 30.28, variation: 0.066 },
  ];

  return activeList.filter((active) => active.symbol === symbol).pop();
}

export default getAssets;
