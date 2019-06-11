
const friendDatabase = {}; 


class Friend {
    constructor(id, {firstName, lastName, gender, age, language, email, contacts }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.language = language;
        this.email = email;
        this.contacts = contacts
    }
}

//resolver map
export const resolvers = {
    Query: {
        friend: () => {
            return {
                "id": 123123,
                "firstName": "Anthony",
                "lastName": "Pancerella",
                "gender": "Male",
                "age": "24",
                "language": "English",
                "email": "test@test.com"
            }
        },    
        getFriend: ({ id }) => {
            return new Friend(id, friendDatabase[id]);
        },
    },
    Mutation: {
        createFriend: ({input}) => {
            let id = require("crypto").randomBytes(10).toString('hex');
            friendDatabase[id] = input;
            return new Friend(id, input);
        }
    }
}