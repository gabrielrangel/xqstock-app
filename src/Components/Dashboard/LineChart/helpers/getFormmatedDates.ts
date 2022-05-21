export function getFormmatedDates(
  timeseries: [string, Record<string, string>][]
) {
  return timeseries.map(([date]) => {
    const [isoDateStr] = new Date(date).toISOString().split("T");
    const [yyyy, mm, dd] = isoDateStr.split("-");
    return `${dd}/${mm}/${yyyy}`;
  });
}
