const User = require('./user');

let users = [];

module.exports.addUser = (id, name)=>{
    let new_user = new User(id, name);
    users.push(new_user);
    return new_user;
}

module.exports.getUsers = ()=>{
    return users;
}

module.exports.isUser = (id, name)=>{
    if(users.findIndex(x => x.id === id && x.name===name)!==-1)
    {
        return true;
    }
    return false;

}
