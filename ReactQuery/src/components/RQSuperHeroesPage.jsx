import { useQuery } from "@tanstack/react-query"
import fetchHeroes from "./fetchHeroes"

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery({
    queryKey: ["super-heroes"],
    queryFn: fetchHeroes,
  })
  if (isError && !isLoading) {
    return <div>{error.message}</div>
  }
  console.log(isLoading, isFetching, data)
  return (
    <div>
      <h1>RQ Super heroes page</h1>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.map((hero) => (
            <ul key={hero.id}>
              <li>{hero.name}</li>
            </ul>
          ))
        )}
      </div>
    </div>
  )
}

export default RQSuperHeroesPage
