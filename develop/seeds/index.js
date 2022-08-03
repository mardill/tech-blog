const sequelize = require('../config/connection');
const seedContent = require('./contentData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedContent();

  process.exit(0);
};

seedAll();