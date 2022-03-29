const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

// starter for blogdata - line 16 below may need to be modified 
  for (const blog of blogData) {
    await blogData.create({
      ...blog,
    });
  }

  process.exit(0);
};

seedDatabase();