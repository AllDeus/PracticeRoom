const sequelize = require('../config/connection');
const { User, Post, Song } = require('../models');

const userData = require('./userData.json');
const blogData = require('./postData.json');
const songData = require('./songData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // TODO: starter for blogdata - line 16 below may need to be modified 
  for (const blog of blogData) {
    await blogData.create({
      ...blog,
    });
  }

  const songs = await Song.bulkCreate(songData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};


seedDatabase();