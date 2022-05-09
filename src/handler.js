'use strict';

let users = require('./common/userFunction');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from serverless!',
      },
      null,
      2
    ),
  };
};


module.exports.createUser = async (event) => {
    let u = users.addUser(event.body.id, event.body.name);
    return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: 'User '+u.name+' created',
      },
      null,
      2
    ),
    };
};


module.exports.listUsers = async (event) => {
return {
statusCode: 200,
body: JSON.stringify(
  {
    users: users.getUsers(),
  },
  null,
  2
),
};
};

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
