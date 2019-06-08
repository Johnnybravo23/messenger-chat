const uuidv4 = require('uuid/v4');

// creating a user
const createUser = ({name})=>(
    {
       id: uuidv4(),
       name
   }
)

// create message
const createMessage = ({message, sender})=>{
	return {
		id: uuidv4(),
		time: getTime(new Date(Date.now())),
		message,
		sender,
	}
} 

// create chat
const createChat = ({messages = [], name="Community", users=[]} = {})=> ({
    id: uuidv4(),
    name,
    messages,
    users,
    typingUsers:[]
})


// time format
const getTime = (date)=>{
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`
}

module.exports = {
    createMessage,
    createChat,
    createUser
}