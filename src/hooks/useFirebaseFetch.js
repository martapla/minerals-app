import { useEffect, useState } from 'react'
import { getMinerals } from "../lib/mineralRequest";
import { collection, addDoc } from 'firebase/firestore';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseServer';

export const useFirebaseFetch = () => {
    const[data,setData] = useState([])
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(null)
    const [filterMinerals, setFilterMinerals] = useState([])

    useEffect(() => {
        const fetchData = async () => {

          setLoading(true);
          try {
            const mineralsData = await getMinerals(); 
            console.log(mineralsData)
            setData(mineralsData);
            setFilterMinerals(mineralsData);

          } catch (err) {
            setError(err.message);

          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
    }, []);
    return {data, loading, error, filterMinerals};  
}

export default useFirebaseFetch