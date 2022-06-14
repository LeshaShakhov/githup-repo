import React, {useEffect, useState} from "react";
import {DetailType, UserType} from "../App";
import axios from "axios";
import {Timer} from "./Timer";

export type DetailsType = {
    selectedUser: UserType | null
    setLoading:(value:boolean) => void
}
export const Details: React.FC<DetailsType> = React.memo(({selectedUser, setLoading}) => {
    console.log('render Details')
    const [details, setDetails] = useState<DetailType | null>(null);
    useEffect(() => {
        if (selectedUser) {
            setLoading(true)
            axios
                .get(`https://api.github.com/users/${selectedUser.login}`)
                .then(resp => {
                    setDetails(resp.data)
                    setLoading(false)
                })

        }
    }, [selectedUser])
    if (!details) return null
    return (
        <div>
            <h2>{details.login}</h2>
            <Timer setDetails={setDetails} selectedUser={selectedUser}/>
            <div><img alt='' src={details.avatar_url}/></div>
            <div><span>{details.login}</span><span>followers: {details.followers}</span></div>
        </div>
    );
});