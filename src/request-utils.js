import request from 'superagent'
export { signUp }

const URL = 'https://todos-todos-todos.herokuapp.com';

async function signUp(email, password) {
  const response = await request
  .post(`${URL}/auth/signup`)
  .send({email: email, password: password});

  return response;
}