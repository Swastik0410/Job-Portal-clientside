import { createContext, useState } from "react";

export const AppContext=createContext()

export const AppContextProvider=(props)=>{

    const [searchFilter,setSearchFilter]=useState({
        title:"",
        location:""
    })

    const [isSeached,setIsSearched]=useState(false);
    const value={
        setSearchFilter,searchFilter,isSeached,setIsSearched
    }
    return(<AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>)
}