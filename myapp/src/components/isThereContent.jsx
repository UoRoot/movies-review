export function IsThereContent({content, children}) {
  if (!content) return <p>Loading data...</p>
  return (
    {children}
  )
}