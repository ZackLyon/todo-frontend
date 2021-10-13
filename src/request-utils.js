import request from 'superagent'
export { signUp, getTodos, createTodo, updateTodo, logIn }

const URL = 'https://todos-todos-todos.herokuapp.com';

async function signUp(email, password) {
  const response = await request
    .post(`${URL}/auth/signup`)
    .send({email: email, password: password});

  return response;
}

async function getTodos(token) {
  const response = await request
    .get(`${URL}/api/todos`)
    .set({Authorization: token})

  return response.body;
}

async function createTodo(token, todo) {
  const response = await request
    .post(`${URL}/api/todos`)
    .send({todo: todo})
    .set({Authorization: token})

  return response;
}

async function updateTodo(token, todo, completed, id) {
  const response = await request
    .put(`${URL}/api/todos/${id}`)
    .send({todo: todo, completed: completed})
    .set({Authorization: token})

  return response;
}

async function logIn(email, password) {
  const response = await request
    .post(`${URL}/auth/signin`)
    .send({email: email, password: password});

  return response;
}