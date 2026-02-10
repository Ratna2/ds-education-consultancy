import * as XLSX from "xlsx";

/**
 * Export to Excel (.xlsx)
 */
export function exportToExcel(data: any[], fileName: string) {
  if (!data || data.length === 0) return;

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Data");

  XLSX.writeFile(wb, `${sanitize(fileName)}.xlsx`);
}

/**
 * Export to CSV
 */
export function exportToCSV(data: any[], fileName: string) {
  if (!data || data.length === 0) return;

  const ws = XLSX.utils.json_to_sheet(data);
  const csv = XLSX.utils.sheet_to_csv(ws);

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = `${sanitize(fileName)}.csv`;
  link.click();
}

/**
 * Sanitize filename
 */
function sanitize(name: string) {
  return name.replace(/[^a-z0-9]/gi, "_").toLowerCase();
}
