import React, {useEffect, useState} from "react";
import {DetailType, UserType} from "../App";

type TimerType = {
    selectedUser: UserType | null
    setDetails: (details: DetailType | null) => void
}
const Time = 10
export const Timer: React.FC<TimerType> = ({selectedUser,setDetails}) => {
    const [count, setCount] = useState<number>(Time);
    const ticker = () => {
        console.log('>>>')
        setCount(prev => prev - 1)
    }
    useEffect(() => {
        const interval = setInterval(() => ticker(), 1000)
        return () => { clearInterval(interval); console.log('clear Interval');setCount(Time) }
    }, [selectedUser]);

    useEffect(() => {
        console.log(count)
        if(count < 1) {
            setDetails(null)
        }
    }, [count]);
    return (
        <>
            <div>{count}</div>
        </>
    );
};