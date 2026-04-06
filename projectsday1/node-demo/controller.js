const data = require('./data');
const utils = require('./utils');

exports.getTodos = (res) => {
  res.write("Daftar Todo:\n");
  data.todos.forEach((t, i) => {
    res.write(`${i + 1}. ${t}\n`);
  });
  res.end();
};

exports.addTodo = (res) => {
  const newTodo = utils.randomTask();
  data.todos.push(newTodo);
  res.end(`Todo ditambahkan: ${newTodo}`);
};
