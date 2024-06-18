// Auth Context

import { useEffect } from "react";
import { createContext, useState, useContext } from "react";


const BooksContext = createContext();


const BooksContextProvider = ({ children }) => {
    const [query, setQuery] = useState("")
    const [selectType, setSelectType] = useState("all")
    const [myData, setMyData] = useState([])

    const getData = async () => {
try {
    const {data} = await axios(url)
} catch (error) {
    
}

    }


  
const values = {myData,setMyData}
  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
};


export const useBooksContext = () => {
  return useContext(BooksContext);
};

export default BooksContextProvider;
