export function formatDate(date: string): string {
  const [year, month] = date.split("-");
  const monthName = new Date(Number(year), Number(month) - 1).toLocaleString(
    "en-US",
    { month: "short" }
  );
  return `${monthName} ${year}`;
}
