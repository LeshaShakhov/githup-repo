import React, {useEffect, useState} from "react";
import {User} from "./User";
import {UserType} from "../App";
import axios from "axios";
import {Loading} from "./Loading";


export type UsersListType = {
    searchTerm:string
    selectedUser: UserType | null
    setSelectedUser: (searchTerm:UserType) => void
    loading: boolean
    setLoading: (value:boolean)=>void
}
export const UsersList: React.FC<UsersListType> = React.memo(({searchTerm, selectedUser, setSelectedUser, loading, setLoading}) => {
    console.log('render UsersList')
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        axios
            .get(`https://api.github.com/search/users?per_page=10&q=${searchTerm} in:login`)
            .then(resp => {
                setUsers(resp.data.items)
                setLoading(false)
            })
    }, [searchTerm]);
    return (
        <ul style={{position: 'relative', display: 'block', minHeight: '350px', width: '400px'}}>
            {loading && <Loading/>}
            {users.map(u => <User user={u} key={u.id} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>)}
        </ul>
    );
});