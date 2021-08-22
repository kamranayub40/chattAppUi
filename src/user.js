import React, { useState, useEffect } from 'react'

import { mainUser, contactsMessages, Message } from './generateFakeData'
import Avatar from './components/Avatar'
import ContactBox from './components/ContactBox'
import MessagesBox from './components/MessagesBox'
import ChatInputBox from './components/ChatInputBox'
import Search from './components/Search'
import Welcome from './components/Welcome'
import './App.css'


const User =()=>{
    const [data, setData] = useState(contactsMessages)
    const [contactSelected, setContactSelected] = useState({})
    const [currentMessages, setCurrentMessages] = useState([])
    const [message, setMessage] = useState('')
    const [search, setSearch] = useState('')
    const [filteredContacts, setFilterContacts] = useState([])
    useEffect(() => {
        const currContact = data.find((d) => d.contact.id === contactSelected.id)
        setCurrentMessages((currContact && currContact.messages) || [])
        filterContacts(data, search)
    }, [contactSelected, data, search])

    function pushMessage() {
        const index = data.findIndex((d) => d.contact.id === contactSelected.id)
        const newData = Object.assign([], data, {
            [index]: {
                contact: contactSelected,
                messages: [...data[index].messages, new Message(true, message, new Date())],
            },
        })

        setData(newData)
        setMessage('')
    }

    function filterContacts(data, search) {
        const result = data.filter(({ contact }) => {
            return !search || contact.name.toLowerCase().includes(search.toLowerCase())
        })
        setFilterContacts(result)
    }


    return(
        <>
     <div className="app1">
         <h4 style={{color:'white',marginLeft:"38%",marginBottom:20}}>User Name</h4>
         <div>

            <img className="avataruser"  src='https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg' alt=""/>
         </div>
         <div className="assinment">
                    <button className="media">MEDIA</button>
                    <button className="Assignment">ASSIGNMENT</button>

            </div>
            <div style={{ display:'flex',marginBottom:20 ,flexDirection:'row'}} className="boxContainer">
                <button className="box1">hello</button>
                <button className="box1">hello</button>
                <button className="box1">hello</button>


            </div>
            <div style={{ display:'flex',marginBottom:20 ,flexDirection:'row'}} className="boxContainer">
                <button className="box1">hello</button>
                <button className="box1">hello</button>
                <button className="box1">hello</button>


            </div>
            <div style={{ display:'flex' ,flexDirection:'row'}} className="boxContainer">
                <button className="box1">hello</button>
                <button className="box1">hello</button>
                <button className="box1">hello</button>


            </div>
    </div>
      
    </>
        
    )
}
export default User
