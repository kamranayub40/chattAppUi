import React, { useState, useEffect } from 'react'

import { mainUser, contactsMessages, Message } from './generateFakeData'
import Avatar from './components/Avatar'
import ContactBox from './components/ContactBox'
import MessagesBox from './components/MessagesBox'
import ChatInputBox from './components/ChatInputBox'
import Search from './components/Search'
import Welcome from './components/Welcome'
import User from '../src/user'
import './App.css'

function App() {
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

    return (
        <>
        <div className="app">
            <aside>
                <header>
                    <Avatar user={mainUser} /> 
                Teacher
                    {/* <img src="data:image/png;base64,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"/> */}
                </header>
                <div className="contact-boxes">
                    {filteredContacts.map(({ contact, messages }) => (
                        <ContactBox
                            contact={contact}
                            key={contact.id}
                            setContactSelected={setContactSelected}
                            messages={messages}
                        />
                    ))}
                </div>
            </aside>
            {contactSelected.id ? (
                <main>
                    <header>
                        <Avatar user={contactSelected} showName />
                    </header>
                    <MessagesBox messages={currentMessages} />

                    <ChatInputBox message={message} setMessage={setMessage} pushMessage={pushMessage} />
                </main>
            ) : (
                <Welcome />
            )}
            <User/>

        </div>
        <div className="footerHead">
            <div className="footer">

            <img className="avataruser"  src='https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg' alt=""/>
        </div>
        <div className="footer">

            <img className="avataruser"  src='https://thumbs.dreamstime.com/z/hotspot-network-icon-symbol-illustration-design-very-nice-you-will-be-happy-172172879.jpg' alt=""/>
        </div>
        <div className="footer">

            <img className="avataruser"  src='data:image/png;base64,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' alt=""/>
        </div>
        <div className="footer">

            <img className="avataruser"  src='data:image/png;base64,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' alt=""/>
        </div>
        </div>
                <Search search={search} setSearch={setSearch} />
                </>
    )
}

export default App
