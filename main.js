module.exports = function() {
var faker = require('faker');
faker.locale = "tr";
  var data = { users: [] }
  // Create 1000 users
  for (var i = 0; i < 100; i++) {
    data.users.push({
      id: i,
      username: faker.internet.userName(),
      date: faker.date.past(),
      bank: faker.company.companyName(),
      miktar: faker.finance.amount(),
      method: faker.finance.transactionType(),
      status: faker.random.boolean(),
    })
  }
  return data
}
