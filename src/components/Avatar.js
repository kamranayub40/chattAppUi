import React from 'react'

export default function Avatar({ user, showName }) {
    return (
        <div className="avatar-component">
            <img className="avatar" src='https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg' alt="" />
            {showName && <h3 className="avatar-title">{user.name}</h3>}
        </div>
    )
}
