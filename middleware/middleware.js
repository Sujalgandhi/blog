const authentication = (req, res, next) => {
  const { name, description } = req.body;
  if (name && description) {
    next();
  } else {
    console.log("invalid data");
    res.redirect("/");
  }
};

const isAuth = (req, res, next) => {
  let { userName } = req.cookies;
  if (userName) {
    next();
  } else {
    return res.redirect("/loginPage");
  }
};

module.exports = { authentication, isAuth };
