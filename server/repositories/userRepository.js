const User = require("../models/userModel");
const crudRepository = require("./crudRepository");

class userRepository extends crudRepository{
  constructor() {
    super(User);
  }

  findUserbyEmail = async (email) => {
    try {
      const user = await this.model.findOne({ email });
      return user;
    } catch (error) {
      console.log("repository error : " + error);
      throw error;
    }
  };

  findUserbyUsername = async (username) => {
    try {
      const user = await this.model.findOne({ username });
      return user;
    } catch (error) {
      console.log("repository error : " + error);
      throw error;
    }
  };
}

module.exports = userRepository;
