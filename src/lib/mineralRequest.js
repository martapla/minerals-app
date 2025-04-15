import { collection, getDocs} from "firebase/firestore"; 
import {db} from '../firebase/firebaseServer'

export const getMinerals = async () => {

    const querySnapshot = await getDocs(collection(db, "products"));

    const data = querySnapshot.docs.map((doc)=>({
      id:doc.id,
      ...doc.data(),
    }))
    return data
    
}