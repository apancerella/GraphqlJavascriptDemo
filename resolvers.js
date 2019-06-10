
const friendDatabase = {}; 


class Friend {
    constructor(id, {firstName, lastName, gender, language, email }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }
}

const resolvers = {
    friend: () => {
        return {
            "id": 123123,
            "firstName": "Anthony",
            "lastName": "Pancerella",
            "gender": "Male",
            "language": "English",
            "email": "test@test.com"
            //"emails": [{ email: "test@test.com" }, { email: "test2@test.com" }]
        }
    },
    getFriend: ({ id }) => {
        return new Friend(id, friendDatabase[id]);
    },
    createFriend: ({input}) => {
        let id = require("crypto").randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
};

export default resolvers;