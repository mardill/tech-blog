const sequelize = require('../config/connection');
const seedContent = require('./contentsData');
const seedUsers = require('./userData');
const seedComments = require('./commentData');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedContent();
  console.log('\n----- USERS SEEDED -----\n');

  await seedComments();
  console.log('\n----- USERS SEEDED -----\n');


  process.exit(0);
};

seedAll();