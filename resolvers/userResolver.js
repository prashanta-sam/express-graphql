const { User } = require('../models/user');

const userResolver = {
  getUser: async ({ id }) => {
    return await User.findByPk(id);
  },
  getUsers: async () => {
    return await User.findAll();
  },
  createUser: async ({ name, email, age }) => {
    return await User.create({ name, email, age });
  },
  updateUser: async ({ id, name, email, age }) => {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    user.name = name !== undefined ? name : user.name;
    user.email = email !== undefined ? email : user.email;
    user.age = age !== undefined ? age : user.age;
    await user.save();
    return user;
  },
  deleteUser: async ({ id }) => {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.destroy();
    return "User deleted";
  },
};

module.exports = userResolver;
