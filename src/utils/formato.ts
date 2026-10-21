export function formatearPrecio(valor: number): string {
  return Number(valor).toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: Number(valor) % 1 ? 2 : 0,
    maximumFractionDigits: 2,
  });
}
