import { useEffect, useState, useContext } from 'react'
import { getMinerals } from "../lib/mineralRequest";
import { LanguageContext } from '../context/LanguageContext'

export const useFirebaseFetch = () => {
    const { language } = useContext(LanguageContext);
    const[data,setData] = useState([])
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(null)
    const [filterMinerals, setFilterMinerals] = useState([])
    const [search, setSearch] = useState("")

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

    //Input Search
    const handleSearch = (searchTerm) => {
      console.log('input text:',searchTerm)
      setSearch(searchTerm)

      const inputMineral = data.filter(mineral => {
        const name = mineral.name?.[language];  
        return name && name.toLowerCase().includes(searchTerm.toLowerCase());
      });

      setFilterMinerals(inputMineral)
    }

    return {data, loading, error, filterMinerals, search, handleSearch};  
}

export default useFirebaseFetch