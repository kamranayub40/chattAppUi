const faker = require('faker')

class User {
    constructor() {
        this.id = faker.random.uuid()
        this.name = faker.name.findName()
        this.avatar = faker.internet.avatar()

    }
}
export class Message {
    
    constructor(isMainUser, msg, date) {
        this.avatar = faker.internet.avatar()

        this.id = faker.random.uuid()
        this.msg = msg || faker.lorem.words(faker.helpers.randomize([...Array(10).keys()]))
        this.isMainUser = isMainUser
        this.date = date || faker.date.recent()
    }
}

export const mainUser = new User()

export const contacts = [...Array(10).keys()].map(() => new User())

export const contactsMessages = contacts.map((contact) => {
    return {
        contact,
        messages: [...Array(10).keys()]
            .map((_, i) => {
                return (i + 1) % 2 === 0 ? new Message(true) : new Message(false)
            })
            .filter((m) => m.msg),
    }
})
