export function yearsfilter() {
  const years = []
  
  for (let ano = 1970; ano <= new Date().getFullYear(); ano++) {
    years.push(ano)
  }

  return { years };
}
