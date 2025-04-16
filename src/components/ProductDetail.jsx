import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseServer';

const ProductDetail = () => {

  const params= useParams()
  const {id} = params
  console.log(params)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {  // Ask for ID Product
    
    getDoc(doc(db, 'products', id)).then((docSnap) => {
  
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() }); //Save in state if exist
      } else {
        console.log('Product not found');
      }
  
      // stop showing Loading..
      setLoading(false);
    });
  }, [id]);


  return (
    <>
    <div>
        <Link to="/" className="back-btn">🪴 Back</Link>
      </div>
      <h1 className="title-card">Plant Details 🍃</h1>
      <div className="details-card">
          <div className="details-info">
              <p><strong>Name:</strong> {product.name}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Region:</strong> {product.region}</p>
              <p><strong>Price:</strong> {product.price}</p>
              <button onClick={addCarrito} className='add-btn'>
                🛒 Add
              </button>
          </div>
      </div>
    </>
  )
}

export default ProductDetail