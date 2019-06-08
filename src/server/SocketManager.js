const io = require('./index.js').io;
const { COMMUNITY_CHAT, MESSAGE_RECIEVED, MESSAGE_SENT, USER_CONNECTED, USER_DISCONNECTED, TYPING, STOP_TYPING, VERIFY_USER, LOGOUT
        } = require('../Events');
const { createUser, createMessage, createChat } = require('../Factories');

const connectedUser = {}

module.exports = function(socket) {
    console.log("Socket Id:" + socket.id);

    // verify username
    socket.on(VERIFY_USER, (nickname, callback) => {
        if(isUser(connectedUser, nickname)){
            callback({ isUser: true, user:null})
        } else {
            callback({ isUser: false, user:createUser({name:nickname})})
        }
    })
}
function addUser(userList, user){
    let newList = Object.assign({}, userList)
    newList[user.name] = user
    return newList
  }

function removeUser(userList, username) {
    let newList = Object.assign({}, userList)
    delete newList[username]
    return newList
}
function isUser(userList, username){
    return username in userList
  }