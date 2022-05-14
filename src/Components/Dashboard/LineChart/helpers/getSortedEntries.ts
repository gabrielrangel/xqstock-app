export const getSortedEntries = (
  value: Record<string, Record<string, string>>
) => Object.entries(value).sort(([date]) => new Date(date).getTime());
