export function SectionLinksTwo({content, title}) {
  if (!content) return <p>Loading data...</p>
  return (
    <>
      <h3 className="st-left-title">{title}</h3>
      <aside className="content-list">
        {content.map(item => (
          <a href="./" key={item.id}>
            <span>{item.title}</span>
            <span>{item.type}</span>
          </a>
        ))}
      </aside>
    </>
  )
}