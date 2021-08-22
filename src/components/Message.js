import React from 'react'
import doubleCheck from '../assets/done_all.svg'
import Avatar from './Avatar'

export default function Message({ message }) {
    return (
        <>
        <div className={`message ${message.isMainUser ? 'sent' : 'received'}`}>

                
            <Avatar/>
            {message.msg}
            <div className="metadata">
                <span className="date">{message.date.toLocaleString()}</span>
                {message.isMainUser && <img src={doubleCheck} alt="" className="icon-small" />}
            </div>
        </div>
        </>
    )
}
