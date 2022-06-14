import React, {useEffect} from "react";
import {UserType} from "../App";

type UserParamsType = {
    user: UserType
    selectedUser: UserType|null
    setSelectedUser: (user:UserType) => void
}
export const User: React.FC<UserParamsType> = React.memo(({user, selectedUser, setSelectedUser}) => {
    console.log('render User')
    useEffect(() => {
        if (selectedUser) {
            document.title = selectedUser.login
        }
    }, [selectedUser])
    return (
        <li key={user.id} className={selectedUser === user ? 'active' : ''}
            onClick={() => setSelectedUser(user)}>{user.login}</li>
    );
})