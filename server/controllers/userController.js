const userService = require("../services/userService");

class UserController {
  constructor() {
    this.user = new userService();
  }

  signup = async (req, res) => {
    const { username, email, password } = req.body;

    const validationError = this.user.validateSignupRequestBody(req.body);

    if (validationError) {
      return res.status(400).send(validationError);
    }

    const existingUserError = await this.user.checkExistingUser(
      username,
      email
    );

    if (existingUserError) {
      return res.status(400).send(existingUserError);
    }

    try {
      const user = await this.user.createUser(req.body);
      res.send(user);
    } catch (err) {
      res.status(500).send("An error occurred while creating user");
    }
  };

  signin = async (req, res) => {
    const { username, password } = req.body;
    const validationError = this.user.validateSigninRequestBody(req.body);

    if (validationError) {
      return res.status(400).send(validationError);
    }

    try {
      const user = await this.user.signinUser(username, password);

      if (!user) {
        return res.status(400).send("Invalid username / email or password");
      }
      res.send(user);
    } catch (error) {
      res.status(500).send(error + "An error occurred while signing in");
    }
  };
}

module.exports = new UserController();
