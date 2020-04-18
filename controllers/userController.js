exports.getUser = (req, res, next) => {
  res.send('Hello world from GET user');
};

exports.postUser = (req, res, next) => {
  res.send('Hello world from POST user');
};
