const jwt = require('jsonwebtoken');


const secretKey = 'ThisisGauravSEcretKeyajlreja';

const options = { expiresIn: '7d' }; // Token expiration time

const create_token = async (id) => {
  try {
    const token = await jwt.sign({ _id: id }, secretKey, options);

    console.log('Generated token:', token);

    return token;


  }
  catch (error) {
    console.log(error);
  }


}

module.exports = { create_token }
