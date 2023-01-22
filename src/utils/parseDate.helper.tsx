export function getParseDate(date: any) {
  const fecha = new Date(date);
  const anio = fecha.getFullYear();
  const mes = fecha.toLocaleDateString('es-ar', {month: 'long'});
  const dia = fecha.toLocaleDateString('es-ar', {day: 'numeric'});
  return dia + ' de ' + mes + ', ' + anio;
}

export function getCurrentMonth() {
  const fecha = new Date();
  const mes = fecha.toLocaleDateString('es-ar', {month: 'long'});
  return mes;
}
