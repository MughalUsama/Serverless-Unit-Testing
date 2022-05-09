let users = require('../src/common/userFunction');

test('Added user is an object', () => {
    let us = users.addUser(12, 'test')
    expect(typeof us).toBe('object');
});

test('User list is an array', () => {
    users.addUser(12, 'test1');
    users.addUser(12, 'test2');
    users.addUser(12, 'test3');
    users.addUser(12, 'test4');

    let us = users.getUsers()
    console.log(us);
    expect(Array.isArray(us)).toBe(true);
});

test('Added user is properly created', () => {
    let us = users.addUser(6, 'test')
    expect(us.name).toBe('test');
});


test('Already added user exists', () => {
    users.addUser(0, 'testuser');
    expect(users.isUser(0, 'testuser')).toBe(true);
});