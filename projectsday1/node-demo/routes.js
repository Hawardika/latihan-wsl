const controller = require('./controller');

module.exports = (req, res) => {
  if (req.url === '/') {
    controller.getTodos(res);
  } else if (req.url === '/add') {
    controller.addTodo(res);
  } else {
    res.end("404 Not Found");
  }
};
