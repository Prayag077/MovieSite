const STORAGE_KEY = 'movie_search_counts'

const getStoredData = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

const saveData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export const updateSearchCount = (searchTerm, movie) => {
  if (!searchTerm || !movie) return

  const storedData = getStoredData()

  const existing = storedData.find(
    (item) => item.searchTerm.toLowerCase() === searchTerm.toLowerCase()
  )

  if (existing) {
    existing.count += 1
  } else {
    storedData.push({
      id: crypto.randomUUID(),
      searchTerm,
      count: 1,
      movie_id: movie.id,
      title: movie.title,
      poster_url: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '',
    })
  }

  saveData(storedData)
}

export const getTrendingMovies = () => {
  const storedData = getStoredData()

  return storedData
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
}
