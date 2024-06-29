import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import HomePage from "./components/HomePage"
import SuperHeroPage from "./components/SuperHeroPage"
import RQSuperHeroesPage from "./components/RQSuperHeroesPage"

// import RQSuperHeroesPage from "./components/RQSuperHeroes"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      cacheTime: 20000,
    },
  },
})

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <nav>
          <ul>
            <li>
              <Link to="/super-heroes">Traditionally fetched Super-Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">React-Query Super-Heroes</Link>
            </li>

            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
