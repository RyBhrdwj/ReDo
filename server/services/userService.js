const userRepository = require("../repositories/userRepository");

class userService {
  constructor() {
    this.user = new userRepository();
  }

  validateSignupRequestBody = (body) => {
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return "Missing required fields";
    }

    return null;
  };

  validateSigninRequestBody = (body) => {
    const { username, password } = body;

    if (!username || !password) {
      return "Missing required fields";
    }

    return null;
  };

  checkExistingUser = async (username, email) => {
    if (await this.user.findUserbyUsername(username)) {
      return "Username already exists";
    }
    if (await this.user.findUserbyEmail(email)) {
      return "Email already exists";
    }
    return null;
  };

  createUser = async (userData) => {
    const user = await this.user.create(userData);
    return user;
  };

  signinUser = async (username, password) => {
    const user = username.includes("@")
      ? await this.user.findUserByEmail(username)
      : await this.user.findUserbyUsername(username);

    return user && user.password === password ? user : "Invalid credentials";
  };
}

module.exports = userService;
