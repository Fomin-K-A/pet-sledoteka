import { useState } from 'react'

export default function App() {
  const [query,setQuery] = useState('')

  return (
    <main>
      <h1>Следотека</h1>
      <p>Бланки уголовного судопроизводства для курсантов.</p>

      <input type="search" placeholder="Поиск по названию бланка" value={query} onChange={(event) => setQuery(event.target.value)}/>
    </main>
  )
}