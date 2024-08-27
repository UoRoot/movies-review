import { Card } from "./card"

export function Search({ items }) {
  if (!items) return <p>Loading data...</p>

  return (
    items.map(item => (
      <Card key={crypto.randomUUID()} id={item.id} title={item.title} image={item.image} type={item.type} />
    ))
  )
}

export function FindMovies({ items, type, search }) {
  return (
    <>
    <h2>Resultados de {type} para {search}</h2>
      <section className="st-entertainment-search">
        <Search items={items} />
      </section>
    </>
  )
}