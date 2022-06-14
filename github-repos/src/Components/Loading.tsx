import React from "react";
import './Loading.css'
export const Loading: React.FC<{}> = props => {
    return (
        <div className='loading'>
            <div className='inner'>
                <div></div>
                <div style={{animationDelay: '0.25s'}}></div>
                <div style={{animationDelay: '.5s'}}></div>
                <div style={{animationDelay: '0.75s'}}></div>
            </div>
        </div>
    );
};

