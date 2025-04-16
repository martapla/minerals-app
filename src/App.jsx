import{useFirebaseFetch} from './hooks/useFirebaseFetch'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart' 

function App() {
  const {loading, error, filterMinerals} = useFirebaseFetch()

  if (loading) return <h3 className='loading'>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<ProductsList products={filterMinerals}/>} />  
                <Route path='products/:id' element={<ProductDetail />} />
                <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
