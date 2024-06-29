const fetchHeroes = async () => {
  const apiRes = await fetch("http://localhost:4000/superheroes")
  return apiRes.json()
}

export default fetchHeroes
