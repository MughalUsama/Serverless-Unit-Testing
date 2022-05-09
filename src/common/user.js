module.exports = class User {
    constructor(id, name, createdAt=new Date()) {
        this.createdAt = createdAt instanceof Date ? createdAt : new Date(createdAt)
        this.id = id
        this.name = name
    }
};

