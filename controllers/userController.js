exports.getUser = (req, res, next) => {
  res.send(`Hello world from GET user ${req.params.id}`);
};

exports.postUser = (req, res, next) => {
  const userName = req.body.nombre;
  const userLastName = req.body.apellido;

  if (userName == null || userLastName == null) {
    res.json({
      message: 'User not created!',
      post: 'Errror',
    });
  } else {
    res.json({
      message: 'User created!',
      name: `${userName}`,
      lastName: `${userLastName}`,
    });
  }
};
