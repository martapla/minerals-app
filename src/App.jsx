import{useFirebaseFetch} from './hooks/useFirebaseFetch'

function App() {
  const {loading, error, filterMinerals} = useFirebaseFetch()

  if (loading) return <h3 className='loading'>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <>
      <h1>Minerals</h1>
    </>
  )
}

export default App
