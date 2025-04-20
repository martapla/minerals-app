import { createContext, useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseServer"; 

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // default

  const docRef = doc(db, "config", "languageConfig");

  // Llegeix idioma de Firebase quan es carrega
  useEffect(() => {
    const fetchLanguage = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLanguage(docSnap.data().language);
      } else {
        console.log("No language config found, using default.");
      }
    };
    fetchLanguage();
  }, []);

  const switchLanguage = async (lang) => {
    setLanguage(lang);
    await setDoc(docRef, { language: lang }, { merge: true }); // save to Firebase
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
