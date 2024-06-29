import { useEffect, useState } from "react"

const SuperHeroPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  const getSuperHeroes = async () => {
    try {
      const res = await fetch("http://localhost:4000/superheroes")
      const json = await res.json()
      setData(json)
      setIsLoading(false)
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getSuperHeroes()
  }, [])
  if (error) {
    return <div>{error}</div>
  }
  return (
    <div>
      <h1>super hero page</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((hero) => (
            <ul key={hero.id}>
              <p>{hero.name}</p>
            </ul>
          ))}
        </div>
      )}
    </div>
  )
}

export default SuperHeroPage
