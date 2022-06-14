import React, {useEffect, useState} from "react";
import {INITIAL_TERM} from "../App";
type UsersFiltersType = {
    setSearchTerm:(searchTerm:string) => void
    searchTerm:string

}
export const UsersFilters: React.FC<UsersFiltersType> = React.memo(({setSearchTerm,searchTerm}) => {
    console.log('render UsersFilters')
    const [tempSearchTerm, setTempSearchTerm] = useState(INITIAL_TERM)

    useEffect(() => {
        setTempSearchTerm(searchTerm)
    }, [searchTerm]);
    return (
        <>
            <input type='text' value={tempSearchTerm} onChange={(e) => setTempSearchTerm(e.currentTarget.value)}/>
            { tempSearchTerm !== searchTerm && <button onClick={() => setSearchTerm(tempSearchTerm)}>Search</button> }
        </>
    );
})